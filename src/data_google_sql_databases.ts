import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSqlDatabasesArgs {
  instance: string;
  project?: string;
}

export class data_google_sql_databases extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleSqlDatabasesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_sql_databases", resourceName);
  }

  get databases(): string {
    return `data.${this.resourceType}.${this.resourceName}.databases`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance`;
  }
}
