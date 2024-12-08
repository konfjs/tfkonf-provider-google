import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubTopicArgsIngestionDataSourceSettingsAwsKinesis {
  aws_role_arn: string;
  consumer_arn: string;
  gcp_service_account: string;
  stream_arn: string;
}

export interface GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorageAvroFormat {
}

export interface GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStoragePubsubAvroFormat {
}

export interface GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorageTextFormat {
  delimiter?: string;
}

export interface GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorage {
  bucket: string;
  match_glob?: string;
  minimum_object_create_time?: string;
  avro_format?: GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorageAvroFormat;
  pubsub_avro_format?: GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
  text_format?: GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorageTextFormat;
}

export interface GooglePubsubTopicArgsIngestionDataSourceSettingsPlatformLogsSettings {
  severity?: string;
}

export interface GooglePubsubTopicArgsIngestionDataSourceSettings {
  aws_kinesis?: GooglePubsubTopicArgsIngestionDataSourceSettingsAwsKinesis;
  cloud_storage?: GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorage;
  platform_logs_settings?: GooglePubsubTopicArgsIngestionDataSourceSettingsPlatformLogsSettings;
}

export interface GooglePubsubTopicArgsMessageStoragePolicy {
  allowed_persistence_regions: string[];
}

export interface GooglePubsubTopicArgsSchemaSettings {
  encoding?: string;
  schema: string;
}

export interface GooglePubsubTopicArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GooglePubsubTopicArgs {
  kms_key_name?: string;
  labels?: { [key: string]: string };
  message_retention_duration?: string;
  name: string;
  ingestion_data_source_settings?: GooglePubsubTopicArgsIngestionDataSourceSettings;
  message_storage_policy?: GooglePubsubTopicArgsMessageStoragePolicy;
  schema_settings?: GooglePubsubTopicArgsSchemaSettings;
  timeouts?: GooglePubsubTopicArgsTimeouts;
}

export class google_pubsub_topic extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GooglePubsubTopicArgs) {
    const meta = {ingestion_data_source_settings:{isBlock:true,aws_kinesis:{isBlock:true},cloud_storage:{isBlock:true,avro_format:{isBlock:true},pubsub_avro_format:{isBlock:true},text_format:{isBlock:true}},platform_logs_settings:{isBlock:true}},message_storage_policy:{isBlock:true},schema_settings:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_pubsub_topic", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
