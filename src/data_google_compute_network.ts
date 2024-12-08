import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeNetworkArgs {
  name: string;
  project?: string;
}

export class data_google_compute_network extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeNetworkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_network", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get gateway_ipv4(): string {
    return `data.${this.resourceType}.${this.resourceName}.gateway_ipv4`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get internal_ipv6_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.internal_ipv6_range`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get subnetworks_self_links(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnetworks_self_links`;
  }
}
