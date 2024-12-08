import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSqlDatabaseArgs {
  instance: string;
  name: string;
  project?: string;
}

export class data_google_sql_database extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSqlDatabaseArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_sql_database", resourceName);
  }

  get charset(): string {
    return `data.${this.resourceType}.${this.resourceName}.charset`;
  }

  get collation(): string {
    return `data.${this.resourceType}.${this.resourceName}.collation`;
  }

  get deletion_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_policy`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }
}
