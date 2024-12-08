import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryTableArgsBiglakeConfiguration {
  connection_id: string;
  file_format: string;
  storage_uri: string;
  table_format: string;
}

export interface GoogleBigqueryTableArgsEncryptionConfiguration {
  kms_key_name: string;
}

export interface GoogleBigqueryTableArgsExternalDataConfigurationAvroOptions {
  use_avro_logical_types: boolean;
}

export interface GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptionsColumnFamilyColumn {
  encoding?: string;
  field_name?: string;
  only_read_latest?: boolean;
  qualifier_encoded?: string;
  qualifier_string?: string;
  type?: string;
}

export interface GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptionsColumnFamily {
  encoding?: string;
  family_id?: string;
  only_read_latest?: boolean;
  type?: string;
  column?: GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptionsColumnFamilyColumn[];
}

export interface GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptions {
  ignore_unspecified_column_families?: boolean;
  output_column_families_as_json?: boolean;
  read_rowkey_as_string?: boolean;
  column_family?: GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptionsColumnFamily[];
}

export interface GoogleBigqueryTableArgsExternalDataConfigurationCsvOptions {
  allow_jagged_rows?: boolean;
  allow_quoted_newlines?: boolean;
  encoding?: string;
  field_delimiter?: string;
  quote: string;
  skip_leading_rows?: number;
}

export interface GoogleBigqueryTableArgsExternalDataConfigurationGoogleSheetsOptions {
  range?: string;
  skip_leading_rows?: number;
}

export interface GoogleBigqueryTableArgsExternalDataConfigurationHivePartitioningOptions {
  mode?: string;
  require_partition_filter?: boolean;
  source_uri_prefix?: string;
}

export interface GoogleBigqueryTableArgsExternalDataConfigurationJsonOptions {
  encoding?: string;
}

export interface GoogleBigqueryTableArgsExternalDataConfigurationParquetOptions {
  enable_list_inference?: boolean;
  enum_as_string?: boolean;
}

export interface GoogleBigqueryTableArgsExternalDataConfiguration {
  autodetect: boolean;
  compression?: string;
  connection_id?: string;
  file_set_spec_type?: string;
  ignore_unknown_values?: boolean;
  json_extension?: string;
  max_bad_records?: number;
  metadata_cache_mode?: string;
  object_metadata?: string;
  reference_file_schema_uri?: string;
  source_format?: string;
  source_uris: string[];
  avro_options?: GoogleBigqueryTableArgsExternalDataConfigurationAvroOptions;
  bigtable_options?: GoogleBigqueryTableArgsExternalDataConfigurationBigtableOptions;
  csv_options?: GoogleBigqueryTableArgsExternalDataConfigurationCsvOptions;
  google_sheets_options?: GoogleBigqueryTableArgsExternalDataConfigurationGoogleSheetsOptions;
  hive_partitioning_options?: GoogleBigqueryTableArgsExternalDataConfigurationHivePartitioningOptions;
  json_options?: GoogleBigqueryTableArgsExternalDataConfigurationJsonOptions;
  parquet_options?: GoogleBigqueryTableArgsExternalDataConfigurationParquetOptions;
}

export interface GoogleBigqueryTableArgsMaterializedView {
  allow_non_incremental_definition?: boolean;
  enable_refresh?: boolean;
  query: string;
  refresh_interval_ms?: number;
}

export interface GoogleBigqueryTableArgsRangePartitioningRange {
  end: number;
  interval: number;
  start: number;
}

export interface GoogleBigqueryTableArgsRangePartitioning {
  field: string;
  range: GoogleBigqueryTableArgsRangePartitioningRange;
}

export interface GoogleBigqueryTableArgsTableConstraintsForeignKeysColumnReferences {
  referenced_column: string;
  referencing_column: string;
}

export interface GoogleBigqueryTableArgsTableConstraintsForeignKeysReferencedTable {
  dataset_id: string;
  project_id: string;
  table_id: string;
}

export interface GoogleBigqueryTableArgsTableConstraintsForeignKeys {
  name?: string;
  column_references: GoogleBigqueryTableArgsTableConstraintsForeignKeysColumnReferences;
  referenced_table: GoogleBigqueryTableArgsTableConstraintsForeignKeysReferencedTable;
}

export interface GoogleBigqueryTableArgsTableConstraintsPrimaryKey {
  columns: string[];
}

export interface GoogleBigqueryTableArgsTableConstraints {
  foreign_keys?: GoogleBigqueryTableArgsTableConstraintsForeignKeys[];
  primary_key?: GoogleBigqueryTableArgsTableConstraintsPrimaryKey;
}

export interface GoogleBigqueryTableArgsTableReplicationInfo {
  replication_interval_ms?: number;
  source_dataset_id: string;
  source_project_id: string;
  source_table_id: string;
}

export interface GoogleBigqueryTableArgsTimePartitioning {
  field?: string;
  require_partition_filter?: boolean;
  type: string;
}

export interface GoogleBigqueryTableArgsView {
  query: string;
  use_legacy_sql?: boolean;
}

export interface GoogleBigqueryTableArgs {
  clustering?: string[];
  dataset_id: string;
  deletion_protection?: boolean;
  description?: string;
  friendly_name?: string;
  labels?: { [key: string]: string };
  max_staleness?: string;
  require_partition_filter?: boolean;
  resource_tags?: { [key: string]: string };
  table_id: string;
  biglake_configuration?: GoogleBigqueryTableArgsBiglakeConfiguration;
  encryption_configuration?: GoogleBigqueryTableArgsEncryptionConfiguration;
  external_data_configuration?: GoogleBigqueryTableArgsExternalDataConfiguration;
  materialized_view?: GoogleBigqueryTableArgsMaterializedView;
  range_partitioning?: GoogleBigqueryTableArgsRangePartitioning;
  table_constraints?: GoogleBigqueryTableArgsTableConstraints;
  table_replication_info?: GoogleBigqueryTableArgsTableReplicationInfo;
  time_partitioning?: GoogleBigqueryTableArgsTimePartitioning;
  view?: GoogleBigqueryTableArgsView;
}

export class google_bigquery_table extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigqueryTableArgs) {
    const meta = {biglake_configuration:{isBlock:true},encryption_configuration:{isBlock:true},external_data_configuration:{isBlock:true,avro_options:{isBlock:true},bigtable_options:{isBlock:true,column_family:{isBlock:true,column:{isBlock:true}}},csv_options:{isBlock:true},google_sheets_options:{isBlock:true},hive_partitioning_options:{isBlock:true},json_options:{isBlock:true},parquet_options:{isBlock:true}},materialized_view:{isBlock:true},range_partitioning:{isBlock:true,range:{isBlock:true}},table_constraints:{isBlock:true,foreign_keys:{isBlock:true,column_references:{isBlock:true},referenced_table:{isBlock:true}},primary_key:{isBlock:true}},table_replication_info:{isBlock:true},time_partitioning:{isBlock:true},view:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_table", resourceName);
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get dataset_id(): string {
    return `${this.resourceType}.${this.resourceName}.dataset_id`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get expiration_time(): string {
    return `${this.resourceType}.${this.resourceName}.expiration_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get num_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.num_bytes`;
  }

  get num_long_term_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.num_long_term_bytes`;
  }

  get num_rows(): string {
    return `${this.resourceType}.${this.resourceName}.num_rows`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get schema(): string {
    return `${this.resourceType}.${this.resourceName}.schema`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get table_id(): string {
    return `${this.resourceType}.${this.resourceName}.table_id`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
