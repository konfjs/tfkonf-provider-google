import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigtableAuthorizedViewArgsSubsetViewFamilySubsets {
  family_name: string;
  qualifier_prefixes?: string[];
  qualifiers?: string[];
}

export interface GoogleBigtableAuthorizedViewArgsSubsetView {
  row_prefixes?: string[];
  family_subsets?: GoogleBigtableAuthorizedViewArgsSubsetViewFamilySubsets[];
}

export interface GoogleBigtableAuthorizedViewArgsTimeouts {
  create?: string;
  update?: string;
}

export interface GoogleBigtableAuthorizedViewArgs {
  instance_name: string;
  name: string;
  table_name: string;
  subset_view?: GoogleBigtableAuthorizedViewArgsSubsetView;
  timeouts?: GoogleBigtableAuthorizedViewArgsTimeouts;
}

export class google_bigtable_authorized_view extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigtableAuthorizedViewArgs) {
    const meta = {subset_view:{isBlock:true,family_subsets:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigtable_authorized_view", resourceName);
  }

  get deletion_protection(): string {
    return `${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_name(): string {
    return `${this.resourceType}.${this.resourceName}.instance_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get table_name(): string {
    return `${this.resourceType}.${this.resourceName}.table_name`;
  }
}
