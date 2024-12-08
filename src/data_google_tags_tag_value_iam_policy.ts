import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleTagsTagValueIamPolicyArgs {
  tag_value: string;
}

export class data_google_tags_tag_value_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleTagsTagValueIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_tags_tag_value_iam_policy", resourceName);
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

  get tag_value(): string {
    return `data.${this.resourceType}.${this.resourceName}.tag_value`;
  }
}
