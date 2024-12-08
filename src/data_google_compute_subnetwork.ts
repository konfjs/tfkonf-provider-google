import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeSubnetworkArgs {
  name?: string;
}

export class data_google_compute_subnetwork extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeSubnetworkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_subnetwork", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get gateway_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.gateway_address`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get internal_ipv6_prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.internal_ipv6_prefix`;
  }

  get ip_cidr_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_cidr_range`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get private_ip_google_access(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_ip_google_access`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get secondary_ip_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.secondary_ip_range`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }
}
