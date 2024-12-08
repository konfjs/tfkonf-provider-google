import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTagsTagValueIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleTagsTagValueIamMemberArgs {
  member: string;
  role: string;
  tag_value: string;
  condition?: GoogleTagsTagValueIamMemberArgsCondition;
}

export class google_tags_tag_value_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleTagsTagValueIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_tags_tag_value_iam_member", resourceName);
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

  get tag_value(): string {
    return `${this.resourceType}.${this.resourceName}.tag_value`;
  }
}
