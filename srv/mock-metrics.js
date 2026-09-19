// ============================================================
// Mock SAP / BTP / CPI Metrics
// ============================================================
//
// This file contains mock data for the monitoring requirements.
//
// Later:
// SAP API response
//      ↓
// Transform SAP response
//      ↓
// Same metric structure
//      ↓
// Dynatrace Metrics API
//
// For now, we use static mock values.
// ============================================================

const commonDimensions = {
    subaccount: "MOCK-SUBACCOUNT",
    service_instance: "MOCK-SERVICE",
    region: "ap-south-1"
};


// ============================================================
// 1. BTP Audit Logs
// ============================================================

const metrics = [

    {
        key: "sap.btp.audit.events",
        type: "count",
        value: 125,
        dimensions: {
            ...commonDimensions,
            event_type: "LOGIN"
        }
    },


    // ========================================================
    // 2. BTP Billing / Cost
    // ========================================================

    {
        key: "sap.btp.billing.cost",
        type: "gauge",
        value: 2450.75,
        dimensions: {
            ...commonDimensions,
            currency: "INR"
        }
    },


    // ========================================================
    // 3. BTP IAS Audit Logs
    // ========================================================

    {
        key: "sap.btp.ias.audit.events",
        type: "count",
        value: 87,
        dimensions: {
            ...commonDimensions,
            event_type: "AUTHENTICATION"
        }
    },


    // ========================================================
    // 4. CPI Message Monitoring
    // ========================================================

    {
        key: "sap.cpi.message.count",
        type: "count",
        value: 250,
        dimensions: {
            ...commonDimensions,
            iflow: "OrderProcessing",
            package: "SalesPackage",
            status: "COMPLETED"
        }
    },

    {
        key: "sap.cpi.message.processing_time",
        type: "gauge",
        value: 250,
        dimensions: {
            ...commonDimensions,
            iflow: "OrderProcessing",
            package: "SalesPackage",
            status: "COMPLETED"
        }
    },

    {
        key: "sap.cpi.message.errors",
        type: "count",
        value: 5,
        dimensions: {
            ...commonDimensions,
            iflow: "OrderProcessing",
            package: "SalesPackage",
            status: "FAILED"
        }
    },


    // ========================================================
    // 5. CPI Artifact Inventory
    // ========================================================

    {
        key: "sap.cpi.artifact.count",
        type: "gauge",
        value: 42,
        dimensions: {
            ...commonDimensions,
            artifact_type: "IFLOW"
        }
    },


    // ========================================================
    // 6. CPI - S/4HANA Correlation
    // ========================================================

    {
        key: "sap.cpi.s4.correlation.count",
        type: "count",
        value: 120,
        dimensions: {
            ...commonDimensions,
            source_system: "CPI",
            target_system: "S4HANA"
        }
    },


    // ========================================================
    // 7. CPI OpenTelemetry Trace Support
    // ========================================================

    {
        key: "sap.cpi.otel.trace.count",
        type: "count",
        value: 95,
        dimensions: {
            ...commonDimensions,
            trace_status: "OK"
        }
    },


    // ========================================================
    // 8. API Management Monitoring
    // ========================================================

    {
        key: "sap.apim.api.calls",
        type: "count",
        value: 1500,
        dimensions: {
            ...commonDimensions,
            api: "OrdersAPI"
        }
    },

    {
        key: "sap.apim.api.latency",
        type: "gauge",
        value: 185,
        dimensions: {
            ...commonDimensions,
            api: "OrdersAPI"
        }
    },

    {
        key: "sap.apim.api.errors",
        type: "count",
        value: 24,
        dimensions: {
            ...commonDimensions,
            api: "OrdersAPI"
        }
    },


    // ========================================================
    // 9. Ariba Security
    // ========================================================

    {
        key: "sap.ariba.security.events",
        type: "count",
        value: 63,
        dimensions: {
            ...commonDimensions,
            event_type: "SECURITY"
        }
    },


    // ========================================================
    // 10. SuccessFactors Security
    // ========================================================

    {
        key: "sap.successfactors.security.events",
        type: "count",
        value: 72,
        dimensions: {
            ...commonDimensions,
            event_type: "USER_LOGIN"
        }
    },


    // ========================================================
    // 11. SuccessFactors Reports
    // ========================================================

    {
        key: "sap.successfactors.report.executions",
        type: "count",
        value: 38,
        dimensions: {
            ...commonDimensions,
            report_type: "EMPLOYEE"
        }
    },


    // ========================================================
    // 12. CPQ Audit / Security
    // ========================================================

    {
        key: "sap.cpq.audit.events",
        type: "count",
        value: 51,
        dimensions: {
            ...commonDimensions,
            event_type: "CONFIGURATION_CHANGE"
        }
    },


    // ========================================================
    // 13. CPQ Events
    // ========================================================

    {
        key: "sap.cpq.event.errors",
        type: "count",
        value: 7,
        dimensions: {
            ...commonDimensions,
            event_type: "INTEGRATION_ERROR"
        }
    },


    // ========================================================
    // 14. Fieldglass
    // ========================================================

    {
        key: "sap.fieldglass.audit.events",
        type: "count",
        value: 45,
        dimensions: {
            ...commonDimensions,
            event_type: "USER_ACTIVITY"
        }
    },


    // ========================================================
    // 15. SAP Analytics Cloud
    // ========================================================

    {
        key: "sap.sac.user.activity",
        type: "count",
        value: 180,
        dimensions: {
            ...commonDimensions,
            activity: "DASHBOARD_ACCESS"
        }
    },


    // ========================================================
    // 16. SAP Datasphere Overview
    // ========================================================

    {
        key: "sap.datasphere.admission_control.events",
        type: "count",
        value: 12,
        dimensions: {
            ...commonDimensions,
            event_type: "ADMISSION_CONTROL"
        }
    },

    {
        key: "sap.datasphere.oom.events",
        type: "count",
        value: 2,
        dimensions: {
            ...commonDimensions,
            event_type: "OUT_OF_MEMORY"
        }
    },

    {
        key: "sap.datasphere.space.memory",
        type: "gauge",
        value: 68.5,
        dimensions: {
            ...commonDimensions,
            unit: "percent"
        }
    },


    // ========================================================
    // 17. SAP Data Intelligence Pipelines / Tasks
    // ========================================================

    {
        key: "sap.di.pipeline.executions",
        type: "count",
        value: 64,
        dimensions: {
            ...commonDimensions,
            pipeline: "CustomerDataPipeline",
            status: "COMPLETED"
        }
    },


    // ========================================================
    // 18. SAP Cloud Connector
    // ========================================================

    {
        key: "sap.scc.backend.connections",
        type: "gauge",
        value: 18,
        dimensions: {
            ...commonDimensions,
            backend: "S4HANA"
        }
    },

    {
        key: "sap.scc.certificate.status",
        type: "gauge",
        value: 125,
        dimensions: {
            ...commonDimensions,
            certificate: "SCC_CERT_01",
            unit: "days"
        }
    },

    {
        key: "sap.scc.cpu",
        type: "gauge",
        value: 42.3,
        dimensions: {
            ...commonDimensions,
            unit: "percent"
        }
    },

    {
        key: "sap.scc.memory",
        type: "gauge",
        value: 61.7,
        dimensions: {
            ...commonDimensions,
            unit: "percent"
        }
    },


    // ========================================================
    // 19. SAP Cloud Connector HTTP / Logs
    // ========================================================

    {
        key: "sap.scc.http.requests",
        type: "count",
        value: 820,
        dimensions: {
            ...commonDimensions,
            backend: "S4HANA",
            status: "200"
        }
    },


    // ========================================================
    // 20. Synthetic HTTP Monitoring
    // ========================================================

    {
        key: "sap.synthetic.http.availability",
        type: "gauge",
        value: 99.7,
        dimensions: {
            ...commonDimensions,
            url: "https://mock-sap-api.example.com",
            unit: "percent"
        }
    },

    {
        key: "sap.synthetic.http.response_time",
        type: "gauge",
        value: 320,
        dimensions: {
            ...commonDimensions,
            url: "https://mock-sap-api.example.com",
            unit: "milliseconds"
        }
    },


    // ========================================================
    // 21. S/4HANA Cloud Audit
    // ========================================================

    {
        key: "sap.s4.audit.events",
        type: "count",
        value: 210,
        dimensions: {
            ...commonDimensions,
            event_type: "DATA_CHANGE"
        }
    },


    // ========================================================
    // 22. S/4HANA User Management
    // ========================================================

    {
        key: "sap.s4.user.accounts",
        type: "gauge",
        value: 340,
        dimensions: {
            ...commonDimensions,
            user_status: "ACTIVE"
        }
    },


    // ========================================================
    // 23. BTP Application Runtime Metrics
    // ========================================================

    {
        key: "sap.btp.cf.app.cpu",
        type: "gauge",
        value: 47.2,
        dimensions: {
            ...commonDimensions,
            application: "sales-service",
            unit: "percent"
        }
    },


    // ========================================================
    // 24. BTP Service Instance Health
    // ========================================================

    {
        key: "sap.btp.service_instance.health",
        type: "gauge",
        value: 1,
        dimensions: {
            ...commonDimensions,
            service: "hana-cloud",
            status: "HEALTHY"
        }
    },


    // ========================================================
    // 25. BTP Destination Connectivity
    // ========================================================

    {
        key: "sap.btp.destination.availability",
        type: "gauge",
        value: 1,
        dimensions: {
            ...commonDimensions,
            destination: "S4HANA_DEST",
            status: "AVAILABLE"
        }
    },


    // ========================================================
    // 26. BTP Event Mesh
    // ========================================================

    {
        key: "sap.btp.eventmesh.queue.depth",
        type: "gauge",
        value: 37,
        dimensions: {
            ...commonDimensions,
            queue: "ORDER_EVENTS"
        }
    },


    // ========================================================
    // 27. CPI iFlow Performance Profiling
    // ========================================================

    {
        key: "sap.cpi.iflow.step.processing_time",
        type: "gauge",
        value: 145,
        dimensions: {
            ...commonDimensions,
            iflow: "OrderProcessing",
            step: "Mapping"
        }
    },


    // ========================================================
    // 28. CPI Credential Store
    // ========================================================

    {
        key: "sap.cpi.credential.expiry_days",
        type: "gauge",
        value: 45,
        dimensions: {
            ...commonDimensions,
            credential: "S4HANA_CREDENTIAL"
        }
    },


    // ========================================================
    // 29. SuccessFactors Process Monitoring
    // ========================================================

    {
        key: "sap.successfactors.process.completion_rate",
        type: "gauge",
        value: 98.4,
        dimensions: {
            ...commonDimensions,
            process: "EmployeeSync",
            unit: "percent"
        }
    },


    // ========================================================
    // 30. Ariba Procurement Process
    // ========================================================

    {
        key: "sap.ariba.procurement.cycle_time",
        type: "gauge",
        value: 720,
        dimensions: {
            ...commonDimensions,
            process: "PurchaseOrder",
            unit: "minutes"
        }
    },


    // ========================================================
    // 31. SAP Concur
    // ========================================================

    {
        key: "sap.concur.expense.pending",
        type: "gauge",
        value: 34,
        dimensions: {
            ...commonDimensions,
            expense_status: "PENDING"
        }
    },


    // ========================================================
    // 32. Employee Central Payroll
    // ========================================================

    {
        key: "sap.ecp.payroll.errors",
        type: "count",
        value: 3,
        dimensions: {
            ...commonDimensions,
            process: "PAYROLL"
        }
    },


    // ========================================================
    // 33. SAP Customer Experience / C4C
    // ========================================================

    {
        key: "sap.c4c.api.latency",
        type: "gauge",
        value: 210,
        dimensions: {
            ...commonDimensions,
            api: "CustomerAPI",
            unit: "milliseconds"
        }
    },


    // ========================================================
    // 34. SAP Commerce / Hybris
    // ========================================================

    {
        key: "sap.hybris.order.processing_time",
        type: "gauge",
        value: 430,
        dimensions: {
            ...commonDimensions,
            process: "OrderProcessing",
            unit: "milliseconds"
        }
    },


    // ========================================================
    // 35. Cross-Cloud Distributed Tracing
    // ========================================================

    {
        key: "sap.crosscloud.trace.count",
        type: "count",
        value: 115,
        dimensions: {
            ...commonDimensions,
            trace_status: "COMPLETED"
        }
    },


    // ========================================================
    // 36. Business Process Flows
    // ========================================================

    {
        key: "sap.business.process.completed",
        type: "count",
        value: 88,
        dimensions: {
            ...commonDimensions,
            process: "OrderToCash",
            status: "COMPLETED"
        }
    },


    // ========================================================
    // 37. SAP Work Zone
    // ========================================================

    {
        key: "sap.workzone.page.load_time",
        type: "gauge",
        value: 780,
        dimensions: {
            ...commonDimensions,
            page: "Home",
            unit: "milliseconds"
        }
    },


    // ========================================================
    // 38. SAP HANA Cloud
    // ========================================================

    {
        key: "sap.hanacloud.query.performance",
        type: "gauge",
        value: 125,
        dimensions: {
            ...commonDimensions,
            query_type: "SELECT",
            unit: "milliseconds"
        }
    },


    // ========================================================
    // 39. Additional CPI Message Success Metric
    // ========================================================

    {
        key: "sap.cpi.message.success_rate",
        type: "gauge",
        value: 98.0,
        dimensions: {
            ...commonDimensions,
            iflow: "OrderProcessing",
            package: "SalesPackage",
            unit: "percent"
        }
    },


    // ========================================================
    // 40. Additional BTP Audit Metric
    // ========================================================

    {
        key: "sap.btp.audit.failed_events",
        type: "count",
        value: 6,
        dimensions: {
            ...commonDimensions,
            event_type: "FAILED"
        }
    },


    // ========================================================
    // 41. Additional IAS Failed Authentication
    // ========================================================

    {
        key: "sap.btp.ias.failed_authentication",
        type: "count",
        value: 9,
        dimensions: {
            ...commonDimensions,
            authentication: "FAILED"
        }
    },


    // ========================================================
    // 42. Additional SAC Data Refresh
    // ========================================================

    {
        key: "sap.sac.data_refresh",
        type: "gauge",
        value: 96.5,
        dimensions: {
            ...commonDimensions,
            status: "SUCCESS",
            unit: "percent"
        }
    },


    // ========================================================
    // 43. Additional Data Intelligence Pipeline Failures
    // ========================================================

    {
        key: "sap.di.pipeline.failures",
        type: "count",
        value: 4,
        dimensions: {
            ...commonDimensions,
            pipeline: "CustomerDataPipeline",
            status: "FAILED"
        }
    },


    // ========================================================
    // 44. Additional Cloud Connector Disk Usage
    // ========================================================

    {
        key: "sap.scc.disk",
        type: "gauge",
        value: 54.8,
        dimensions: {
            ...commonDimensions,
            unit: "percent"
        }
    },


    // ========================================================
    // 45. Additional CPI-S/4HANA Correlation Latency
    // ========================================================

    {
        key: "sap.cpi.s4.correlation.latency",
        type: "gauge",
        value: 360,
        dimensions: {
            ...commonDimensions,
            source_system: "CPI",
            target_system: "S4HANA",
            unit: "milliseconds"
        }
    },


    // ========================================================
    // 46. Additional CPI OTel Error Traces
    // ========================================================

    {
        key: "sap.cpi.otel.error.count",
        type: "count",
        value: 4,
        dimensions: {
            ...commonDimensions,
            trace_status: "ERROR"
        }
    },


    // ========================================================
    // 47. Additional API Management Error Rate
    // ========================================================

    {
        key: "sap.apim.api.error_rate",
        type: "gauge",
        value: 1.6,
        dimensions: {
            ...commonDimensions,
            api: "OrdersAPI",
            unit: "percent"
        }
    },


    // ========================================================
    // 48. Additional Datasphere Task Execution
    // ========================================================

    {
        key: "sap.datasphere.task.executions",
        type: "count",
        value: 73,
        dimensions: {
            ...commonDimensions,
            task: "DataRefresh",
            status: "COMPLETED"
        }
    },


    // ========================================================
    // 49. Additional S/4HANA User Changes
    // ========================================================

    {
        key: "sap.s4.user.changes",
        type: "count",
        value: 14,
        dimensions: {
            ...commonDimensions,
            change_type: "USER_UPDATE"
        }
    },


    // ========================================================
    // 50. Additional Event Mesh Published Events
    // ========================================================

    {
        key: "sap.btp.eventmesh.published.events",
        type: "count",
        value: 640,
        dimensions: {
            ...commonDimensions,
            topic: "ORDER_EVENTS"
        }
    }

];


// ============================================================
// Export
// ============================================================

module.exports = {
    metrics
};