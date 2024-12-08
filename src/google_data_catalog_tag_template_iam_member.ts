import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogTagTemplateIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataCatalogTagTemplateIamMemberArgs {
  member: string;
  role: string;
  tag_template: string;
  condition?: GoogleDataCatalogTagTemplateIamMemberArgsCondition;
}

export class google_data_catalog_tag_template_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataCatalogTagTemplateIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_tag_template_iam_member", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get tag_template(): string {
    return `${this.resourceType}.${this.resourceName}.tag_template`;
  }
}
