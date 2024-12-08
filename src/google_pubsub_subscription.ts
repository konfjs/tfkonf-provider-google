import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubSubscriptionArgsBigqueryConfig {
  drop_unknown_fields?: boolean;
  service_account_email?: string;
  table: string;
  use_table_schema?: boolean;
  use_topic_schema?: boolean;
  write_metadata?: boolean;
}

export interface GooglePubsubSubscriptionArgsCloudStorageConfigAvroConfig {
  use_topic_schema?: boolean;
  write_metadata?: boolean;
}

export interface GooglePubsubSubscriptionArgsCloudStorageConfig {
  bucket: string;
  filename_datetime_format?: string;
  filename_prefix?: string;
  filename_suffix?: string;
  max_bytes?: number;
  max_duration?: string;
  max_messages?: number;
  service_account_email?: string;
  avro_config?: GooglePubsubSubscriptionArgsCloudStorageConfigAvroConfig;
}

export interface GooglePubsubSubscriptionArgsDeadLetterPolicy {
  dead_letter_topic?: string;
  max_delivery_attempts?: number;
}

export interface GooglePubsubSubscriptionArgsExpirationPolicy {
  ttl: string;
}

export interface GooglePubsubSubscriptionArgsPushConfigNoWrapper {
  write_metadata: boolean;
}

export interface GooglePubsubSubscriptionArgsPushConfigOidcToken {
  audience?: string;
  service_account_email: string;
}

export interface GooglePubsubSubscriptionArgsPushConfig {
  attributes?: { [key: string]: string };
  push_endpoint: string;
  no_wrapper?: GooglePubsubSubscriptionArgsPushConfigNoWrapper;
  oidc_token?: GooglePubsubSubscriptionArgsPushConfigOidcToken;
}

export interface GooglePubsubSubscriptionArgsRetryPolicy {
}

export interface GooglePubsubSubscriptionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GooglePubsubSubscriptionArgs {
  enable_exactly_once_delivery?: boolean;
  enable_message_ordering?: boolean;
  filter?: string;
  labels?: { [key: string]: string };
  message_retention_duration?: string;
  name: string;
  retain_acked_messages?: boolean;
  topic: string;
  bigquery_config?: GooglePubsubSubscriptionArgsBigqueryConfig;
  cloud_storage_config?: GooglePubsubSubscriptionArgsCloudStorageConfig;
  dead_letter_policy?: GooglePubsubSubscriptionArgsDeadLetterPolicy;
  expiration_policy?: GooglePubsubSubscriptionArgsExpirationPolicy;
  push_config?: GooglePubsubSubscriptionArgsPushConfig;
  retry_policy?: GooglePubsubSubscriptionArgsRetryPolicy;
  timeouts?: GooglePubsubSubscriptionArgsTimeouts;
}

export class google_pubsub_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GooglePubsubSubscriptionArgs) {
    const meta = {bigquery_config:{isBlock:true},cloud_storage_config:{isBlock:true,avro_config:{isBlock:true}},dead_letter_policy:{isBlock:true},expiration_policy:{isBlock:true},push_config:{isBlock:true,no_wrapper:{isBlock:true},oidc_token:{isBlock:true}},retry_policy:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_pubsub_subscription", resourceName);
  }

  get ack_deadline_seconds(): string {
    return `${this.resourceType}.${this.resourceName}.ack_deadline_seconds`;
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

  get topic(): string {
    return `${this.resourceType}.${this.resourceName}.topic`;
  }
}
