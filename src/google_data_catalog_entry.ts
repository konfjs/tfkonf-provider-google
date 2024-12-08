import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogEntryArgsGcsFilesetSpec {
  file_patterns: string[];
}

export interface GoogleDataCatalogEntryArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataCatalogEntryArgs {
  description?: string;
  display_name?: string;
  entry_group: string;
  entry_id: string;
  schema?: string;
  type?: string;
  user_specified_system?: string;
  user_specified_type?: string;
  gcs_fileset_spec?: GoogleDataCatalogEntryArgsGcsFilesetSpec;
  timeouts?: GoogleDataCatalogEntryArgsTimeouts;
}

export class google_data_catalog_entry extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataCatalogEntryArgs) {
    const meta = {gcs_fileset_spec:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_entry", resourceName);
  }

  get bigquery_date_sharded_spec(): string {
    return `${this.resourceType}.${this.resourceName}.bigquery_date_sharded_spec`;
  }

  get bigquery_table_spec(): string {
    return `${this.resourceType}.${this.resourceName}.bigquery_table_spec`;
  }

  get entry_group(): string {
    return `${this.resourceType}.${this.resourceName}.entry_group`;
  }

  get entry_id(): string {
    return `${this.resourceType}.${this.resourceName}.entry_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get integrated_system(): string {
    return `${this.resourceType}.${this.resourceName}.integrated_system`;
  }

  get linked_resource(): string {
    return `${this.resourceType}.${this.resourceName}.linked_resource`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
