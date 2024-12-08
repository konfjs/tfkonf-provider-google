import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogTaxonomyIamPolicyArgs {
  policy_data: string;
  taxonomy: string;
}

export class google_data_catalog_taxonomy_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataCatalogTaxonomyIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_taxonomy_iam_policy", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get taxonomy(): string {
    return `${this.resourceType}.${this.resourceName}.taxonomy`;
  }
}
