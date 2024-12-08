import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogTaxonomyIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataCatalogTaxonomyIamMemberArgs {
  member: string;
  role: string;
  taxonomy: string;
  condition?: GoogleDataCatalogTaxonomyIamMemberArgsCondition;
}

export class google_data_catalog_taxonomy_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataCatalogTaxonomyIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_taxonomy_iam_member", resourceName);
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

  get taxonomy(): string {
    return `${this.resourceType}.${this.resourceName}.taxonomy`;
  }
}
