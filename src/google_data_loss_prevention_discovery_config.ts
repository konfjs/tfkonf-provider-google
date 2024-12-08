import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataLossPreventionDiscoveryConfigArgsActionsExportDataProfileTable {
  dataset_id?: string;
  project_id?: string;
  table_id?: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsActionsExportData {
  profile_table?: GoogleDataLossPreventionDiscoveryConfigArgsActionsExportDataProfileTable;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsActionsPubSubNotificationPubsubConditionExpressionsConditions {
  minimum_risk_score?: string;
  minimum_sensitivity_score?: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsActionsPubSubNotificationPubsubConditionExpressions {
  logical_operator?: string;
  conditions?: GoogleDataLossPreventionDiscoveryConfigArgsActionsPubSubNotificationPubsubConditionExpressionsConditions[];
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsActionsPubSubNotificationPubsubCondition {
  expressions?: GoogleDataLossPreventionDiscoveryConfigArgsActionsPubSubNotificationPubsubConditionExpressions;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsActionsPubSubNotification {
  detail_of_message?: string;
  event?: string;
  topic?: string;
  pubsub_condition?: GoogleDataLossPreventionDiscoveryConfigArgsActionsPubSubNotificationPubsubCondition;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsActionsTagResourcesTagConditionsSensitivityScore {
  score: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsActionsTagResourcesTagConditionsTag {
  namespaced_value?: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsActionsTagResourcesTagConditions {
  sensitivity_score?: GoogleDataLossPreventionDiscoveryConfigArgsActionsTagResourcesTagConditionsSensitivityScore;
  tag?: GoogleDataLossPreventionDiscoveryConfigArgsActionsTagResourcesTagConditionsTag;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsActionsTagResources {
  lower_data_risk_to_low?: boolean;
  profile_generations_to_tag?: string[];
  tag_conditions?: GoogleDataLossPreventionDiscoveryConfigArgsActionsTagResourcesTagConditions[];
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsActions {
  export_data?: GoogleDataLossPreventionDiscoveryConfigArgsActionsExportData;
  pub_sub_notification?: GoogleDataLossPreventionDiscoveryConfigArgsActionsPubSubNotification;
  tag_resources?: GoogleDataLossPreventionDiscoveryConfigArgsActionsTagResources;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsOrgConfigLocation {
  folder_id?: string;
  organization_id?: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsOrgConfig {
  project_id?: string;
  location?: GoogleDataLossPreventionDiscoveryConfigArgsOrgConfigLocation;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence {
  frequency?: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetCadenceSchemaModifiedCadence {
  frequency?: string;
  types?: string[];
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetCadenceTableModifiedCadence {
  frequency?: string;
  types?: string[];
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetCadence {
  inspect_template_modified_cadence?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence;
  schema_modified_cadence?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetCadenceSchemaModifiedCadence;
  table_modified_cadence?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetCadenceTableModifiedCadence;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetConditionsOrConditions {
  min_age?: string;
  min_row_count?: number;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetConditionsTypes {
  types?: string[];
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetConditions {
  created_after?: string;
  type_collection?: string;
  or_conditions?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetConditionsOrConditions;
  types?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetConditionsTypes;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetDisabled {
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilterOtherTables {
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilterTableReference {
  dataset_id: string;
  table_id: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns {
  dataset_id_regex?: string;
  project_id_regex?: string;
  table_id_regex?: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilterTablesIncludeRegexes {
  patterns?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns[];
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilterTables {
  include_regexes?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilterTablesIncludeRegexes;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilter {
  other_tables?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilterOtherTables;
  table_reference?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilterTableReference;
  tables?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilterTables;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTarget {
  cadence?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetCadence;
  conditions?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetConditions;
  disabled?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetDisabled;
  filter?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTargetFilter;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetConditions {
  database_engines?: string[];
  types?: string[];
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetDisabled {
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns {
  database_regex?: string;
  database_resource_name_regex?: string;
  instance_regex?: string;
  project_id_regex?: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilterCollectionIncludeRegexes {
  patterns?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns[];
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilterCollection {
  include_regexes?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilterCollectionIncludeRegexes;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilterDatabaseResourceReference {
  database: string;
  database_resource: string;
  instance: string;
  project_id: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilterOthers {
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilter {
  collection?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilterCollection;
  database_resource_reference?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilterDatabaseResourceReference;
  others?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilterOthers;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence {
  frequency: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence {
  frequency?: string;
  types?: string[];
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetGenerationCadence {
  refresh_frequency?: string;
  inspect_template_modified_cadence?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence;
  schema_modified_cadence?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTarget {
  conditions?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetConditions;
  disabled?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetDisabled;
  filter: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetFilter;
  generation_cadence?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTargetGenerationCadence;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetConditionsCloudStorageConditions {
  included_bucket_attributes?: string[];
  included_object_attributes?: string[];
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetConditions {
  created_after?: string;
  min_age?: string;
  cloud_storage_conditions?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetConditionsCloudStorageConditions;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetDisabled {
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterCloudStorageResourceReference {
  bucket_name?: string;
  project_id?: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex {
  bucket_name_regex?: string;
  project_id_regex?: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns {
  cloud_storage_regex?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterCollectionIncludeRegexes {
  patterns?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns[];
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterCollection {
  include_regexes?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterCollectionIncludeRegexes;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterOthers {
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilter {
  cloud_storage_resource_reference?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterCloudStorageResourceReference;
  collection?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterCollection;
  others?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilterOthers;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence {
  frequency?: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetGenerationCadence {
  refresh_frequency?: string;
  inspect_template_modified_cadence?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTarget {
  conditions?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetConditions;
  disabled?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetDisabled;
  filter: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetFilter;
  generation_cadence?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTargetGenerationCadence;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargetsSecretsTarget {
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTargets {
  big_query_target?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsBigQueryTarget;
  cloud_sql_target?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudSqlTarget;
  cloud_storage_target?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsCloudStorageTarget;
  secrets_target?: GoogleDataLossPreventionDiscoveryConfigArgsTargetsSecretsTarget;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataLossPreventionDiscoveryConfigArgs {
  display_name?: string;
  inspect_templates?: string[];
  location: string;
  parent: string;
  status?: string;
  actions?: GoogleDataLossPreventionDiscoveryConfigArgsActions[];
  org_config?: GoogleDataLossPreventionDiscoveryConfigArgsOrgConfig;
  targets?: GoogleDataLossPreventionDiscoveryConfigArgsTargets[];
  timeouts?: GoogleDataLossPreventionDiscoveryConfigArgsTimeouts;
}

export class google_data_loss_prevention_discovery_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataLossPreventionDiscoveryConfigArgs) {
    const meta = {actions:{isBlock:true,export_data:{isBlock:true,profile_table:{isBlock:true}},pub_sub_notification:{isBlock:true,pubsub_condition:{isBlock:true,expressions:{isBlock:true,conditions:{isBlock:true}}}},tag_resources:{isBlock:true,tag_conditions:{isBlock:true,sensitivity_score:{isBlock:true},tag:{isBlock:true}}}},org_config:{isBlock:true,location:{isBlock:true}},targets:{isBlock:true,big_query_target:{isBlock:true,cadence:{isBlock:true,inspect_template_modified_cadence:{isBlock:true},schema_modified_cadence:{isBlock:true},table_modified_cadence:{isBlock:true}},conditions:{isBlock:true,or_conditions:{isBlock:true},types:{isBlock:true}},disabled:{isBlock:true},filter:{isBlock:true,other_tables:{isBlock:true},table_reference:{isBlock:true},tables:{isBlock:true,include_regexes:{isBlock:true,patterns:{isBlock:true}}}}},cloud_sql_target:{isBlock:true,conditions:{isBlock:true},disabled:{isBlock:true},filter:{isBlock:true,collection:{isBlock:true,include_regexes:{isBlock:true,patterns:{isBlock:true}}},database_resource_reference:{isBlock:true},others:{isBlock:true}},generation_cadence:{isBlock:true,inspect_template_modified_cadence:{isBlock:true},schema_modified_cadence:{isBlock:true}}},cloud_storage_target:{isBlock:true,conditions:{isBlock:true,cloud_storage_conditions:{isBlock:true}},disabled:{isBlock:true},filter:{isBlock:true,cloud_storage_resource_reference:{isBlock:true},collection:{isBlock:true,include_regexes:{isBlock:true,patterns:{isBlock:true,cloud_storage_regex:{isBlock:true}}}},others:{isBlock:true}},generation_cadence:{isBlock:true,inspect_template_modified_cadence:{isBlock:true}}},secrets_target:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_loss_prevention_discovery_config", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get errors(): string {
    return `${this.resourceType}.${this.resourceName}.errors`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_run_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_run_time`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
