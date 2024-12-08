import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMonitoringDashboardArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMonitoringDashboardArgs {
  dashboard_json: string;
  timeouts?: GoogleMonitoringDashboardArgsTimeouts;
}

export class google_monitoring_dashboard extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleMonitoringDashboardArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_monitoring_dashboard", resourceName);
  }

  get dashboard_json(): string {
    return `${this.resourceType}.${this.resourceName}.dashboard_json`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
