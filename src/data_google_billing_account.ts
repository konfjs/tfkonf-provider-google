import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBillingAccountArgs {
  billing_account?: string;
  lookup_projects?: boolean;
}

export class data_google_billing_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleBillingAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_billing_account", resourceName);
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get open(): string {
    return `data.${this.resourceType}.${this.resourceName}.open`;
  }

  get project_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.project_ids`;
  }
}
