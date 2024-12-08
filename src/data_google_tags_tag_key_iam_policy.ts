import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleTagsTagKeyIamPolicyArgs {
  tag_key: string;
}

export class data_google_tags_tag_key_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleTagsTagKeyIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_tags_tag_key_iam_policy", resourceName);
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

  get tag_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.tag_key`;
  }
}
