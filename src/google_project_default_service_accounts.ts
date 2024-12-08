import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectDefaultServiceAccountsArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface GoogleProjectDefaultServiceAccountsArgs {
  action: string;
  project: string;
  restore_policy?: string;
  timeouts?: GoogleProjectDefaultServiceAccountsArgsTimeouts;
}

export class google_project_default_service_accounts extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleProjectDefaultServiceAccountsArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_project_default_service_accounts", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service_accounts(): string {
    return `${this.resourceType}.${this.resourceName}.service_accounts`;
  }
}
