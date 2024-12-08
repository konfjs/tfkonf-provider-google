import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSqlDatabaseInstanceLatestRecoveryTimeArgs {
  instance: string;
}

export class data_google_sql_database_instance_latest_recovery_time extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSqlDatabaseInstanceLatestRecoveryTimeArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_sql_database_instance_latest_recovery_time", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance`;
  }

  get latest_recovery_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.latest_recovery_time`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
