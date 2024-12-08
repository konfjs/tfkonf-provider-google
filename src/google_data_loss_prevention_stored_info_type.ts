import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataLossPreventionStoredInfoTypeArgsDictionaryCloudStoragePath {
  path: string;
}

export interface GoogleDataLossPreventionStoredInfoTypeArgsDictionaryWordList {
  words: string[];
}

export interface GoogleDataLossPreventionStoredInfoTypeArgsDictionary {
  cloud_storage_path?: GoogleDataLossPreventionStoredInfoTypeArgsDictionaryCloudStoragePath;
  word_list?: GoogleDataLossPreventionStoredInfoTypeArgsDictionaryWordList;
}

export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldField {
  name: string;
}

export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldTable {
  dataset_id: string;
  project_id: string;
  table_id: string;
}

export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryField {
  field: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldField;
  table: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldTable;
}

export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryCloudStorageFileSet {
  url: string;
}

export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryOutputPath {
  path: string;
}

export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionary {
  big_query_field?: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryField;
  cloud_storage_file_set?: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryCloudStorageFileSet;
  output_path: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryOutputPath;
}

export interface GoogleDataLossPreventionStoredInfoTypeArgsRegex {
  group_indexes?: number[];
  pattern: string;
}

export interface GoogleDataLossPreventionStoredInfoTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataLossPreventionStoredInfoTypeArgs {
  description?: string;
  display_name?: string;
  parent: string;
  dictionary?: GoogleDataLossPreventionStoredInfoTypeArgsDictionary;
  large_custom_dictionary?: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionary;
  regex?: GoogleDataLossPreventionStoredInfoTypeArgsRegex;
  timeouts?: GoogleDataLossPreventionStoredInfoTypeArgsTimeouts;
}

export class google_data_loss_prevention_stored_info_type extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataLossPreventionStoredInfoTypeArgs) {
    const meta = {dictionary:{isBlock:true,cloud_storage_path:{isBlock:true},word_list:{isBlock:true}},large_custom_dictionary:{isBlock:true,big_query_field:{isBlock:true,field:{isBlock:true},table:{isBlock:true}},cloud_storage_file_set:{isBlock:true},output_path:{isBlock:true}},regex:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_loss_prevention_stored_info_type", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get stored_info_type_id(): string {
    return `${this.resourceType}.${this.resourceName}.stored_info_type_id`;
  }
}
