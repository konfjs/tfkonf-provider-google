import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeAddressesArgs {
  filter?: string;
  region?: string;
}

export class data_google_compute_addresses extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeAddressesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_addresses", resourceName);
  }

  get addresses(): string {
    return `data.${this.resourceType}.${this.resourceName}.addresses`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
