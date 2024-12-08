import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudRunLocationsArgs {
}

export class data_google_cloud_run_locations extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleCloudRunLocationsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloud_run_locations", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get locations(): string {
    return `data.${this.resourceType}.${this.resourceName}.locations`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
