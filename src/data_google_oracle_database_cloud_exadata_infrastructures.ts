import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleOracleDatabaseCloudExadataInfrastructuresArgs {
  location: string;
  project?: string;
}

export class data_google_oracle_database_cloud_exadata_infrastructures extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleOracleDatabaseCloudExadataInfrastructuresArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_oracle_database_cloud_exadata_infrastructures", resourceName);
  }

  get cloud_exadata_infrastructures(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_exadata_infrastructures`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }
}
