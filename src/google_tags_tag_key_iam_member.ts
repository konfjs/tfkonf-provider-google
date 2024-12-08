import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTagsTagKeyIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleTagsTagKeyIamMemberArgs {
  member: string;
  role: string;
  tag_key: string;
  condition?: GoogleTagsTagKeyIamMemberArgsCondition;
}

export class google_tags_tag_key_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleTagsTagKeyIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_tags_tag_key_iam_member", resourceName);
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

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get tag_key(): string {
    return `${this.resourceType}.${this.resourceName}.tag_key`;
  }
}