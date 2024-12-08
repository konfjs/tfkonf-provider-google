import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeGlobalAddressArgs {
  name: string;
}

export class data_google_compute_global_address extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeGlobalAddressArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_global_address", resourceName);
  }

  get address(): string {
    return `data.${this.resourceType}.${this.resourceName}.address`;
  }

  get address_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.address_type`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get network_tier(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_tier`;
  }

  get prefix_length(): string {
    return `data.${this.resourceType}.${this.resourceName}.prefix_length`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get purpose(): string {
    return `data.${this.resourceType}.${this.resourceName}.purpose`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get subnetwork(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnetwork`;
  }

  get users(): string {
    return `data.${this.resourceType}.${this.resourceName}.users`;
  }
}
