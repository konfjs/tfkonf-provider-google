import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMonitoringMonitoredProjectArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleMonitoringMonitoredProjectArgs {
  metrics_scope: string;
  name: string;
  timeouts?: GoogleMonitoringMonitoredProjectArgsTimeouts;
}

export class google_monitoring_monitored_project extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleMonitoringMonitoredProjectArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_monitoring_monitored_project", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metrics_scope(): string {
    return `${this.resourceType}.${this.resourceName}.metrics_scope`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
