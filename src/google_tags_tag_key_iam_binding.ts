import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTagsTagKeyIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleTagsTagKeyIamBindingArgs {
  members: string[];
  role: string;
  tag_key: string;
  condition?: GoogleTagsTagKeyIamBindingArgsCondition;
}

export class google_tags_tag_key_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleTagsTagKeyIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_tags_tag_key_iam_binding", resourceName);
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

  get tag_key(): string {
    return `${this.resourceType}.${this.resourceName}.tag_key`;
  }
}
