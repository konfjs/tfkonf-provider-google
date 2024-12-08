import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeSubnetworksArgs {
  filter?: string;
  project?: string;
  region?: string;
}

export class data_google_compute_subnetworks extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeSubnetworksArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_subnetworks", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get subnetworks(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnetworks`;
  }
}
