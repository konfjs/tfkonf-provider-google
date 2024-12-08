import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleProjectOrganizationPolicyArgs {
  constraint: string;
  project: string;
}

export class data_google_project_organization_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleProjectOrganizationPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_project_organization_policy", resourceName);
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

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get list_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.list_policy`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
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
