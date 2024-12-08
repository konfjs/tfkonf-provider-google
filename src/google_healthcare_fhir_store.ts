import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareFhirStoreArgsNotificationConfig {
  pubsub_topic: string;
}

export interface GoogleHealthcareFhirStoreArgsNotificationConfigs {
  pubsub_topic: string;
  send_full_resource?: boolean;
  send_previous_resource_on_delete?: boolean;
}

export interface GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig {
  expiration_ms?: string;
  type: string;
}

export interface GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestinationSchemaConfig {
  recursive_structure_depth: number;
  schema_type?: string;
  last_updated_partition_config?: GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;
}

export interface GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestination {
  dataset_uri: string;
  schema_config: GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestinationSchemaConfig;
}

export interface GoogleHealthcareFhirStoreArgsStreamConfigs {
  resource_types?: string[];
  bigquery_destination: GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestination;
}

export interface GoogleHealthcareFhirStoreArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleHealthcareFhirStoreArgs {
  dataset: string;
  default_search_handling_strict?: boolean;
  disable_referential_integrity?: boolean;
  disable_resource_versioning?: boolean;
  enable_history_import?: boolean;
  enable_update_create?: boolean;
  labels?: { [key: string]: string };
  name: string;
  version: string;
  notification_config?: GoogleHealthcareFhirStoreArgsNotificationConfig;
  notification_configs?: GoogleHealthcareFhirStoreArgsNotificationConfigs[];
  stream_configs?: GoogleHealthcareFhirStoreArgsStreamConfigs[];
  timeouts?: GoogleHealthcareFhirStoreArgsTimeouts;
}

export class google_healthcare_fhir_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleHealthcareFhirStoreArgs) {
    const meta = {notification_config:{isBlock:true},notification_configs:{isBlock:true},stream_configs:{isBlock:true,bigquery_destination:{isBlock:true,schema_config:{isBlock:true,last_updated_partition_config:{isBlock:true}}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_fhir_store", resourceName);
  }

  get complex_data_type_reference_parsing(): string {
    return `${this.resourceType}.${this.resourceName}.complex_data_type_reference_parsing`;
  }

  get dataset(): string {
    return `${this.resourceType}.${this.resourceName}.dataset`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
