import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSqlUserArgsPasswordPolicy {
  allowed_failed_attempts?: number;
  enable_failed_attempts_check?: boolean;
  enable_password_verification?: boolean;
  password_expiration_duration?: string;
}

export interface GoogleSqlUserArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSqlUserArgs {
  deletion_policy?: string;
  instance: string;
  name: string;
  password?: string;
  type?: string;
  password_policy?: GoogleSqlUserArgsPasswordPolicy;
  timeouts?: GoogleSqlUserArgsTimeouts;
}

export class google_sql_user extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSqlUserArgs) {
    const meta = {password_policy:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_sql_user", resourceName);
  }

  get host(): string {
    return `${this.resourceType}.${this.resourceName}.host`;
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

  get sql_server_user_details(): string {
    return `${this.resourceType}.${this.resourceName}.sql_server_user_details`;
  }
}
