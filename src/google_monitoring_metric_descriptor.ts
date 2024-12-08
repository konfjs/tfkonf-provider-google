import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMonitoringMetricDescriptorArgsLabels {
  description?: string;
  key: string;
  value_type?: string;
}

export interface GoogleMonitoringMetricDescriptorArgsMetadata {
  ingest_delay?: string;
  sample_period?: string;
}

export interface GoogleMonitoringMetricDescriptorArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMonitoringMetricDescriptorArgs {
  description: string;
  display_name: string;
  launch_stage?: string;
  metric_kind: string;
  type: string;
  unit?: string;
  value_type: string;
  labels?: GoogleMonitoringMetricDescriptorArgsLabels[];
  metadata?: GoogleMonitoringMetricDescriptorArgsMetadata;
  timeouts?: GoogleMonitoringMetricDescriptorArgsTimeouts;
}

export class google_monitoring_metric_descriptor extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleMonitoringMetricDescriptorArgs) {
    const meta = {labels:{isBlock:true},metadata:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_monitoring_metric_descriptor", resourceName);
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metric_kind(): string {
    return `${this.resourceType}.${this.resourceName}.metric_kind`;
  }

  get monitored_resource_types(): string {
    return `${this.resourceType}.${this.resourceName}.monitored_resource_types`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get value_type(): string {
    return `${this.resourceType}.${this.resourceName}.value_type`;
  }
}
