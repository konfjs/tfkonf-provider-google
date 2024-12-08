import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleMonitoringUptimeCheckIpsArgs {
}

export class data_google_monitoring_uptime_check_ips extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleMonitoringUptimeCheckIpsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_monitoring_uptime_check_ips", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get uptime_check_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.uptime_check_ips`;
  }
}
