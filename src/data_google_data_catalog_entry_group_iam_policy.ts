import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataCatalogEntryGroupIamPolicyArgs {
  entry_group: string;
}

export class data_google_data_catalog_entry_group_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleDataCatalogEntryGroupIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_data_catalog_entry_group_iam_policy", resourceName);
  }

  get entry_group(): string {
    return `data.${this.resourceType}.${this.resourceName}.entry_group`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }
}
