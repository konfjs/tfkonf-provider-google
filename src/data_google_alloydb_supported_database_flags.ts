import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleAlloydbSupportedDatabaseFlagsArgs {
  location: string;
  project?: string;
}

export class data_google_alloydb_supported_database_flags extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleAlloydbSupportedDatabaseFlagsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_alloydb_supported_database_flags", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get supported_database_flags(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_database_flags`;
  }
}
