const https = require("https");

const DT_ENV_URL = process.env.DT_ENV_URL;
const DT_API_TOKEN = process.env.DT_API_TOKEN;

if (!DT_ENV_URL) {
    throw new Error("DT_ENV_URL environment variable is not set");
}

if (!DT_API_TOKEN) {
    throw new Error("DT_API_TOKEN environment variable is not set");
}

const metricsUrl = new URL(
    "/api/v2/metrics/ingest",
    DT_ENV_URL
);

function sendMetrics(metricLines) {

    return new Promise((resolve, reject) => {

        const payload = metricLines.join("\n");

        const options = {
            hostname: metricsUrl.hostname,
            port: 443,
            path: metricsUrl.pathname,
            method: "POST",
            headers: {
                "Authorization": `Api-Token ${DT_API_TOKEN}`,
                "Content-Type": "text/plain",
                "Content-Length": Buffer.byteLength(payload)
            }
        };

        const request = https.request(options, (response) => {

            let responseBody = "";

            response.on("data", (chunk) => {
                responseBody += chunk;
            });

            response.on("end", () => {

                if (response.statusCode >= 200 && response.statusCode < 300) {

                    resolve({
                        statusCode: response.statusCode,
                        body: responseBody
                    });

                } else {

                    reject(
                        new Error(
                            `Dynatrace metric ingestion failed. ` +
                            `HTTP ${response.statusCode}: ${responseBody}`
                        )
                    );

                }
            });
        });

        request.on("error", (error) => {
            reject(error);
        });

        request.write(payload);
        request.end();
    });
}

module.exports = {
    sendMetrics
};