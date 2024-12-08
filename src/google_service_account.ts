import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleServiceAccountArgsTimeouts {
  create?: string;
}

export interface GoogleServiceAccountArgs {
  account_id: string;
  create_ignore_already_exists?: boolean;
  description?: string;
  disabled?: boolean;
  display_name?: string;
  timeouts?: GoogleServiceAccountArgsTimeouts;
}

export class google_service_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleServiceAccountArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_service_account", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get unique_id(): string {
    return `${this.resourceType}.${this.resourceName}.unique_id`;
  }
}
