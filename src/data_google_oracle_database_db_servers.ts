import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleOracleDatabaseDbServersArgs {
  cloud_exadata_infrastructure: string;
  location: string;
  project?: string;
}

export class data_google_oracle_database_db_servers extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleOracleDatabaseDbServersArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_oracle_database_db_servers", resourceName);
  }

  get cloud_exadata_infrastructure(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_exadata_infrastructure`;
  }

  get db_servers(): string {
    return `data.${this.resourceType}.${this.resourceName}.db_servers`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }
}
