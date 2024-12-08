import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGooglePubsubSubscriptionArgs {
  name: string;
  project?: string;
}

export class data_google_pubsub_subscription extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGooglePubsubSubscriptionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_pubsub_subscription", resourceName);
  }

  get ack_deadline_seconds(): string {
    return `data.${this.resourceType}.${this.resourceName}.ack_deadline_seconds`;
  }

  get bigquery_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.bigquery_config`;
  }

  get cloud_storage_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.cloud_storage_config`;
  }

  get dead_letter_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.dead_letter_policy`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get enable_exactly_once_delivery(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_exactly_once_delivery`;
  }

  get enable_message_ordering(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_message_ordering`;
  }

  get expiration_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.expiration_policy`;
  }

  get filter(): string {
    return `data.${this.resourceType}.${this.resourceName}.filter`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get message_retention_duration(): string {
    return `data.${this.resourceType}.${this.resourceName}.message_retention_duration`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get push_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.push_config`;
  }

  get retain_acked_messages(): string {
    return `data.${this.resourceType}.${this.resourceName}.retain_acked_messages`;
  }

  get retry_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.retry_policy`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get topic(): string {
    return `data.${this.resourceType}.${this.resourceName}.topic`;
  }
}
