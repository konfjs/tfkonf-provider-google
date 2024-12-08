import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogEntryGroupIamPolicyArgs {
  entry_group: string;
  policy_data: string;
}

export class google_data_catalog_entry_group_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataCatalogEntryGroupIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_entry_group_iam_policy", resourceName);
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

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }
}
