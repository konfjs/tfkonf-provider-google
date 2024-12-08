import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSqlDatabaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSqlDatabaseArgs {
  deletion_policy?: string;
  instance: string;
  name: string;
  timeouts?: GoogleSqlDatabaseArgsTimeouts;
}

export class google_sql_database extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSqlDatabaseArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_sql_database", resourceName);
  }

  get charset(): string {
    return `${this.resourceType}.${this.resourceName}.charset`;
  }

  get collation(): string {
    return `${this.resourceType}.${this.resourceName}.collation`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
