import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogTaxonomyIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataCatalogTaxonomyIamBindingArgs {
  members: string[];
  role: string;
  taxonomy: string;
  condition?: GoogleDataCatalogTaxonomyIamBindingArgsCondition;
}

export class google_data_catalog_taxonomy_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataCatalogTaxonomyIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_taxonomy_iam_binding", resourceName);
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

  get taxonomy(): string {
    return `${this.resourceType}.${this.resourceName}.taxonomy`;
  }
}
