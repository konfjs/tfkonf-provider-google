import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleServiceAccountKeyArgs {
  name: string;
  project?: string;
  public_key_type?: string;
}

export class data_google_service_account_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleServiceAccountKeyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_service_account_key", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_algorithm(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_algorithm`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get public_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_key`;
  }
}
