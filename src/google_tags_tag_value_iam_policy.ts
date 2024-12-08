import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTagsTagValueIamPolicyArgs {
  policy_data: string;
  tag_value: string;
}

export class google_tags_tag_value_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleTagsTagValueIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_tags_tag_value_iam_policy", resourceName);
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

  get tag_value(): string {
    return `${this.resourceType}.${this.resourceName}.tag_value`;
  }
}
