import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTagsTagKeyIamPolicyArgs {
  policy_data: string;
  tag_key: string;
}

export class google_tags_tag_key_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleTagsTagKeyIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_tags_tag_key_iam_policy", resourceName);
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

  get tag_key(): string {
    return `${this.resourceType}.${this.resourceName}.tag_key`;
  }
}
