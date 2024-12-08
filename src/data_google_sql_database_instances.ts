import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSqlDatabaseInstancesArgs {
  database_version?: string;
  project?: string;
  region?: string;
  state?: string;
  tier?: string;
  zone?: string;
}

export class data_google_sql_database_instances extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSqlDatabaseInstancesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_sql_database_instances", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instances(): string {
    return `data.${this.resourceType}.${this.resourceName}.instances`;
  }
}
