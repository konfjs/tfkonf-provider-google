import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogEntryGroupIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataCatalogEntryGroupIamBindingArgs {
  entry_group: string;
  members: string[];
  role: string;
  condition?: GoogleDataCatalogEntryGroupIamBindingArgsCondition;
}

export class google_data_catalog_entry_group_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataCatalogEntryGroupIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_entry_group_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
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
