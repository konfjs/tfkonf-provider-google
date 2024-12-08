import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeRegionsArgs {
  status?: string;
}

export class data_google_compute_regions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeRegionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_regions", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
