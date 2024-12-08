import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataCatalogTaxonomyIamPolicyArgs {
  taxonomy: string;
}

export class data_google_data_catalog_taxonomy_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleDataCatalogTaxonomyIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_data_catalog_taxonomy_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get taxonomy(): string {
    return `data.${this.resourceType}.${this.resourceName}.taxonomy`;
  }
}
