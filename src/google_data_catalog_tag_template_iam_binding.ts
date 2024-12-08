import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogTagTemplateIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataCatalogTagTemplateIamBindingArgs {
  members: string[];
  role: string;
  tag_template: string;
  condition?: GoogleDataCatalogTagTemplateIamBindingArgsCondition;
}

export class google_data_catalog_tag_template_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataCatalogTagTemplateIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_tag_template_iam_binding", resourceName);
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
