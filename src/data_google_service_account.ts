import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleServiceAccountArgs {
  account_id: string;
  project?: string;
}

export class data_google_service_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_service_account", resourceName);
  }

  get account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.account_id`;
  }

  get disabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.disabled`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get email(): string {
    return `data.${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `data.${this.resourceType}.${this.resourceName}.member`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get unique_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.unique_id`;
  }
}
