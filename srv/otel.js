const { NodeSDK } = require("@opentelemetry/sdk-node");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-proto");

const exporter = new OTLPTraceExporter({
    url: `${process.env.DT_ENV_URL}/api/v2/otlp/v1/traces`,
    headers: {
        Authorization: `Api-Token ${process.env.DT_API_TOKEN}`
    }
});

const sdk = new NodeSDK({
    traceExporter: exporter
});

sdk.start();

console.log("OpenTelemetry initialized");
console.log(
    "Dynatrace endpoint:",
    `${process.env.DT_ENV_URL}/api/v2/otlp/v1/traces`
);

module.exports = sdk;