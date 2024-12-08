import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogEntryGroupIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataCatalogEntryGroupIamMemberArgs {
  entry_group: string;
  member: string;
  role: string;
  condition?: GoogleDataCatalogEntryGroupIamMemberArgsCondition;
}

export class google_data_catalog_entry_group_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataCatalogEntryGroupIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_entry_group_iam_member", resourceName);
  }

  get entry_group(): string {
    return `${this.resourceType}.${this.resourceName}.entry_group`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
