import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeLbIpRangesArgs {
}

export class data_google_compute_lb_ip_ranges extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeLbIpRangesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_lb_ip_ranges", resourceName);
  }

  get http_ssl_tcp_internal(): string {
    return `data.${this.resourceType}.${this.resourceName}.http_ssl_tcp_internal`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }
}
