import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTagsTagValueIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleTagsTagValueIamBindingArgs {
  members: string[];
  role: string;
  tag_value: string;
  condition?: GoogleTagsTagValueIamBindingArgsCondition;
}

export class google_tags_tag_value_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleTagsTagValueIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_tags_tag_value_iam_binding", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get tag_value(): string {
    return `${this.resourceType}.${this.resourceName}.tag_value`;
  }
}