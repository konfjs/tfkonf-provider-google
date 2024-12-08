import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogPolicyTagIamPolicyArgs {
  policy_data: string;
  policy_tag: string;
}

export class google_data_catalog_policy_tag_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataCatalogPolicyTagIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_policy_tag_iam_policy", resourceName);
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

  get policy_tag(): string {
    return `${this.resourceType}.${this.resourceName}.policy_tag`;
  }
}
