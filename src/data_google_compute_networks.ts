import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeNetworksArgs {
  project?: string;
}

export class data_google_compute_networks extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeNetworksArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_networks", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get networks(): string {
    return `data.${this.resourceType}.${this.resourceName}.networks`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }
}
