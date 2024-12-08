import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccNotificationConfigArgsStreamingConfig {
  filter: string;
}

export interface GoogleSccNotificationConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccNotificationConfigArgs {
  config_id: string;
  description?: string;
  organization: string;
  pubsub_topic: string;
  streaming_config: GoogleSccNotificationConfigArgsStreamingConfig;
  timeouts?: GoogleSccNotificationConfigArgsTimeouts;
}

export class google_scc_notification_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSccNotificationConfigArgs) {
    const meta = {streaming_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_notification_config", resourceName);
  }

  get config_id(): string {
    return `${this.resourceType}.${this.resourceName}.config_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }

  get pubsub_topic(): string {
    return `${this.resourceType}.${this.resourceName}.pubsub_topic`;
  }

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }
}
