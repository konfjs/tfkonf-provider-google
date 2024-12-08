import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirestoreFieldArgsIndexConfigIndexes {
  array_config?: string;
  order?: string;
  query_scope?: string;
}

export interface GoogleFirestoreFieldArgsIndexConfig {
  indexes?: GoogleFirestoreFieldArgsIndexConfigIndexes[];
}

export interface GoogleFirestoreFieldArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirestoreFieldArgsTtlConfig {
}

export interface GoogleFirestoreFieldArgs {
  collection: string;
  database?: string;
  field: string;
  index_config?: GoogleFirestoreFieldArgsIndexConfig;
  timeouts?: GoogleFirestoreFieldArgsTimeouts;
  ttl_config?: GoogleFirestoreFieldArgsTtlConfig;
}

export class google_firestore_field extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFirestoreFieldArgs) {
    const meta = {index_config:{isBlock:true,indexes:{isBlock:true}},timeouts:{isBlock:true},ttl_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firestore_field", resourceName);
  }

  get collection(): string {
    return `${this.resourceType}.${this.resourceName}.collection`;
  }

  get field(): string {
    return `${this.resourceType}.${this.resourceName}.field`;
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
}
