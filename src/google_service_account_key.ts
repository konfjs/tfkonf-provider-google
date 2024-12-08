import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleServiceAccountKeyArgs {
  keepers?: { [key: string]: string };
  key_algorithm?: string;
  private_key_type?: string;
  public_key_data?: string;
  public_key_type?: string;
  service_account_id: string;
}

export class google_service_account_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleServiceAccountKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_service_account_key", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get private_key(): string {
    return `${this.resourceType}.${this.resourceName}.private_key`;
  }

  get public_key(): string {
    return `${this.resourceType}.${this.resourceName}.public_key`;
  }

  get service_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_account_id`;
  }

  get valid_after(): string {
    return `${this.resourceType}.${this.resourceName}.valid_after`;
  }

  get valid_before(): string {
    return `${this.resourceType}.${this.resourceName}.valid_before`;
  }
}
