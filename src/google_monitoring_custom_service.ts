import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMonitoringCustomServiceArgsTelemetry {
  resource_name?: string;
}

export interface GoogleMonitoringCustomServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMonitoringCustomServiceArgs {
  display_name?: string;
  user_labels?: { [key: string]: string };
  telemetry?: GoogleMonitoringCustomServiceArgsTelemetry;
  timeouts?: GoogleMonitoringCustomServiceArgsTimeouts;
}

export class google_monitoring_custom_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleMonitoringCustomServiceArgs) {
    const meta = {telemetry:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_monitoring_custom_service", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_id`;
  }
}
