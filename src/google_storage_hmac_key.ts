import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageHmacKeyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleStorageHmacKeyArgs {
  service_account_email: string;
  state?: string;
  timeouts?: GoogleStorageHmacKeyArgsTimeouts;
}

export class google_storage_hmac_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageHmacKeyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_hmac_key", resourceName);
  }

  get access_id(): string {
    return `${this.resourceType}.${this.resourceName}.access_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get secret(): string {
    return `${this.resourceType}.${this.resourceName}.secret`;
  }

  get service_account_email(): string {
    return `${this.resourceType}.${this.resourceName}.service_account_email`;
  }

  get time_created(): string {
    return `${this.resourceType}.${this.resourceName}.time_created`;
  }

  get updated(): string {
    return `${this.resourceType}.${this.resourceName}.updated`;
  }
}
