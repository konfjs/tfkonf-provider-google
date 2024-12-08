import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleProjectArgs {
  project_id?: string;
}

export class data_google_project extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleProjectArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_project", resourceName);
  }

  get auto_create_network(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_create_network`;
  }

  get billing_account(): string {
    return `data.${this.resourceType}.${this.resourceName}.billing_account`;
  }

  get deletion_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_policy`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get folder_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.folder_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get number(): string {
    return `data.${this.resourceType}.${this.resourceName}.number`;
  }

  get org_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.org_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
