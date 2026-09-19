@path: 'monitoring'
service MonitoringService {

    action sendMockTelemetry() returns String;

    action sendMockMetrics() returns String;

}