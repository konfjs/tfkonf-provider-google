import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleFolderOrganizationPolicyArgs {
  constraint: string;
  folder: string;
}

export class data_google_folder_organization_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleFolderOrganizationPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_folder_organization_policy", resourceName);
  }

  get boolean_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.boolean_policy`;
  }

  get constraint(): string {
    return `data.${this.resourceType}.${this.resourceName}.constraint`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get folder(): string {
    return `data.${this.resourceType}.${this.resourceName}.folder`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get list_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.list_policy`;
  }

  get restore_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.restore_policy`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
