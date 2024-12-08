import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGooglePubsubTopicArgs {
  name: string;
  project?: string;
}

export class data_google_pubsub_topic extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGooglePubsubTopicArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_pubsub_topic", resourceName);
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ingestion_data_source_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.ingestion_data_source_settings`;
  }

  get kms_key_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_name`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get message_retention_duration(): string {
    return `data.${this.resourceType}.${this.resourceName}.message_retention_duration`;
  }

  get message_storage_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.message_storage_policy`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get schema_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.schema_settings`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
