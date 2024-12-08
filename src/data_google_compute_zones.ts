import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeZonesArgs {
  region?: string;
  status?: string;
}

export class data_google_compute_zones extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeZonesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_zones", resourceName);
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
