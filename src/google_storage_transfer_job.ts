import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageTransferJobArgsEventStream {
  event_stream_expiration_time?: string;
  event_stream_start_time?: string;
  name: string;
}

export interface GoogleStorageTransferJobArgsNotificationConfig {
  event_types?: string[];
  payload_format: string;
  pubsub_topic: string;
}

export interface GoogleStorageTransferJobArgsScheduleScheduleEndDate {
  day: number;
  month: number;
  year: number;
}

export interface GoogleStorageTransferJobArgsScheduleScheduleStartDate {
  day: number;
  month: number;
  year: number;
}

export interface GoogleStorageTransferJobArgsScheduleStartTimeOfDay {
  hours: number;
  minutes: number;
  nanos: number;
  seconds: number;
}

export interface GoogleStorageTransferJobArgsSchedule {
  repeat_interval?: string;
  schedule_end_date?: GoogleStorageTransferJobArgsScheduleScheduleEndDate;
  schedule_start_date: GoogleStorageTransferJobArgsScheduleScheduleStartDate;
  start_time_of_day?: GoogleStorageTransferJobArgsScheduleStartTimeOfDay;
}

export interface GoogleStorageTransferJobArgsTransferSpecAwsS3DataSourceAwsAccessKey {
  access_key_id: string;
  secret_access_key: string;
}

export interface GoogleStorageTransferJobArgsTransferSpecAwsS3DataSource {
  bucket_name: string;
  path?: string;
  role_arn?: string;
  aws_access_key?: GoogleStorageTransferJobArgsTransferSpecAwsS3DataSourceAwsAccessKey;
}

export interface GoogleStorageTransferJobArgsTransferSpecAzureBlobStorageDataSourceAzureCredentials {
  sas_token: string;
}

export interface GoogleStorageTransferJobArgsTransferSpecAzureBlobStorageDataSource {
  container: string;
  storage_account: string;
  azure_credentials: GoogleStorageTransferJobArgsTransferSpecAzureBlobStorageDataSourceAzureCredentials;
}

export interface GoogleStorageTransferJobArgsTransferSpecGcsDataSink {
  bucket_name: string;
}

export interface GoogleStorageTransferJobArgsTransferSpecGcsDataSource {
  bucket_name: string;
}

export interface GoogleStorageTransferJobArgsTransferSpecHttpDataSource {
  list_url: string;
}

export interface GoogleStorageTransferJobArgsTransferSpecObjectConditions {
  exclude_prefixes?: string[];
  include_prefixes?: string[];
  last_modified_before?: string;
  last_modified_since?: string;
  max_time_elapsed_since_last_modification?: string;
  min_time_elapsed_since_last_modification?: string;
}

export interface GoogleStorageTransferJobArgsTransferSpecPosixDataSink {
  root_directory: string;
}

export interface GoogleStorageTransferJobArgsTransferSpecPosixDataSource {
  root_directory: string;
}

export interface GoogleStorageTransferJobArgsTransferSpecTransferOptions {
  delete_objects_from_source_after_transfer?: boolean;
  delete_objects_unique_in_sink?: boolean;
  overwrite_objects_already_existing_in_sink?: boolean;
  overwrite_when?: string;
}

export interface GoogleStorageTransferJobArgsTransferSpec {
  aws_s3_data_source?: GoogleStorageTransferJobArgsTransferSpecAwsS3DataSource;
  azure_blob_storage_data_source?: GoogleStorageTransferJobArgsTransferSpecAzureBlobStorageDataSource;
  gcs_data_sink?: GoogleStorageTransferJobArgsTransferSpecGcsDataSink;
  gcs_data_source?: GoogleStorageTransferJobArgsTransferSpecGcsDataSource;
  http_data_source?: GoogleStorageTransferJobArgsTransferSpecHttpDataSource;
  object_conditions?: GoogleStorageTransferJobArgsTransferSpecObjectConditions;
  posix_data_sink?: GoogleStorageTransferJobArgsTransferSpecPosixDataSink;
  posix_data_source?: GoogleStorageTransferJobArgsTransferSpecPosixDataSource;
  transfer_options?: GoogleStorageTransferJobArgsTransferSpecTransferOptions;
}

export interface GoogleStorageTransferJobArgs {
  description: string;
  status?: string;
  event_stream?: GoogleStorageTransferJobArgsEventStream;
  notification_config?: GoogleStorageTransferJobArgsNotificationConfig;
  schedule?: GoogleStorageTransferJobArgsSchedule;
  transfer_spec: GoogleStorageTransferJobArgsTransferSpec;
}

export class google_storage_transfer_job extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageTransferJobArgs) {
    const meta = {event_stream:{isBlock:true},notification_config:{isBlock:true},schedule:{isBlock:true,schedule_end_date:{isBlock:true},schedule_start_date:{isBlock:true},start_time_of_day:{isBlock:true}},transfer_spec:{isBlock:true,aws_s3_data_source:{isBlock:true,aws_access_key:{isBlock:true}},azure_blob_storage_data_source:{isBlock:true,azure_credentials:{isBlock:true}},gcs_data_sink:{isBlock:true},gcs_data_source:{isBlock:true},http_data_source:{isBlock:true},object_conditions:{isBlock:true},posix_data_sink:{isBlock:true},posix_data_source:{isBlock:true},transfer_options:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "google_storage_transfer_job", resourceName);
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get deletion_time(): string {
    return `${this.resourceType}.${this.resourceName}.deletion_time`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modification_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_modification_time`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
