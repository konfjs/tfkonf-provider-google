import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleAlloydbLocationsArgs {
  project?: string;
}

export class data_google_alloydb_locations extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleAlloydbLocationsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_alloydb_locations", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get locations(): string {
    return `data.${this.resourceType}.${this.resourceName}.locations`;
  }
}
