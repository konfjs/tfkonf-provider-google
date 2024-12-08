import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogTaxonomyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataCatalogTaxonomyArgs {
  activated_policy_types?: string[];
  description?: string;
  display_name: string;
  timeouts?: GoogleDataCatalogTaxonomyArgsTimeouts;
}

export class google_data_catalog_taxonomy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataCatalogTaxonomyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_taxonomy", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }
}
