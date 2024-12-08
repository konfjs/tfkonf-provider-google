import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataCatalogPolicyTagIamPolicyArgs {
  policy_tag: string;
}

export class data_google_data_catalog_policy_tag_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleDataCatalogPolicyTagIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_data_catalog_policy_tag_iam_policy", resourceName);
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

  get policy_tag(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_tag`;
  }
}
