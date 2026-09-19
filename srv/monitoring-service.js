const cds = require("@sap/cds");
const { trace, SpanStatusCode } = require("@opentelemetry/api");

const { sendMetrics } = require("./dynatrace-metrics");
const { metrics } = require("./mock-metrics");


// ============================================================
// Helper: Convert metric object to Dynatrace metric line
// ============================================================

function buildMetricLine(metric) {

    const dimensions = Object.entries(metric.dimensions || {})
        .map(([key, value]) => {
            return `${key}="${String(value).replace(/"/g, '\\"')}"`;
        })
        .join(",");


    // --------------------------------------------------------
    // Gauge
    // --------------------------------------------------------
    //
    // Gauge format:
    //
    // metric.key,dimension=value 123
    //
    // Do NOT use delta for gauges.
    // --------------------------------------------------------

    if (metric.type === "gauge") {

        if (dimensions) {
            return `${metric.key},${dimensions} ${metric.value}`;
        }

        return `${metric.key} ${metric.value}`;
    }


    // --------------------------------------------------------
    // Count
    // --------------------------------------------------------
    //
    // Count format:
    //
    // metric.key,dimension=value count,delta=123
    // --------------------------------------------------------

    if (metric.type === "count") {

        if (dimensions) {
            return `${metric.key},${dimensions} count,delta=${metric.value}`;
        }

        return `${metric.key} count,delta=${metric.value}`;
    }


    // --------------------------------------------------------
    // Unsupported metric type
    // --------------------------------------------------------

    throw new Error(
        `Unsupported metric type: ${metric.type} for ${metric.key}`
    );
}


// ============================================================
// CAP Service Implementation
// ============================================================

module.exports = cds.service.impl(function () {


    // ========================================================
    // Existing OpenTelemetry Mock Trace
    // ========================================================

    this.on("sendMockTelemetry", async (req) => {

        const tracer = trace.getTracer(
            "cpi.message.monitoring"
        );

        const span = tracer.startSpan(
            "OrderProcessing",
            {
                attributes: {
                    "sap.cpi.package": "SalesPackage",
                    "sap.cpi.status": "COMPLETED",
                    "sap.cpi.message_guid": "MOCK-MSG-001",
                    "sap.cpi.transaction_id": "MOCK-TXN-001",
                    "sap.cpi.correlation_id": "MOCK-CORR-001",
                    "sap.cpi.processing_time_ms": 250
                }
            }
        );

        try {

            await new Promise(
                resolve => setTimeout(resolve, 250)
            );

            span.setStatus({
                code: SpanStatusCode.OK
            });

            return "Mock CPI telemetry sent successfully";

        } catch (error) {

            span.recordException(error);

            span.setStatus({
                code: SpanStatusCode.ERROR,
                message: error.message
            });

            req.error(
                500,
                "Failed to create mock telemetry"
            );

        } finally {

            span.end();
        }
    });


    // ========================================================
    // Send Mock Metrics to Dynatrace
    // ========================================================

    this.on("sendMockMetrics", async (req) => {

        try {

            console.log(
                `Preparing ${metrics.length} mock metrics...`
            );


            // ------------------------------------------------
            // Convert mock metrics to Dynatrace metric lines
            // ------------------------------------------------

            const metricLines = metrics.map(
                buildMetricLine
            );


            // ------------------------------------------------
            // Display metric lines
            // ------------------------------------------------

            console.log(
                "Sending metrics to Dynatrace..."
            );

            console.log(
                metricLines.join("\n")
            );


            // ------------------------------------------------
            // Send to Dynatrace
            // ------------------------------------------------

            const result = await sendMetrics(
                metricLines
            );


            // ------------------------------------------------
            // Dynatrace response
            // ------------------------------------------------

            console.log(
                "Dynatrace response:",
                result.statusCode,
                result.body
            );


            return `Successfully sent ${metrics.length} mock metrics to Dynatrace`;

        } catch (error) {

            console.error(
                "Failed to send mock metrics:",
                error
            );

            req.error(
                500,
                `Failed to send mock metrics: ${error.message}`
            );
        }
    });

});