import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccProjectNotificationConfigArgsStreamingConfig {
  filter: string;
}

export interface GoogleSccProjectNotificationConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccProjectNotificationConfigArgs {
  config_id: string;
  description?: string;
  pubsub_topic: string;
  streaming_config: GoogleSccProjectNotificationConfigArgsStreamingConfig;
  timeouts?: GoogleSccProjectNotificationConfigArgsTimeouts;
}

export class google_scc_project_notification_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccProjectNotificationConfigArgs) {
    const meta = {streaming_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_project_notification_config", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get pubsub_topic(): string {
    return `${this.resourceType}.${this.resourceName}.pubsub_topic`;
  }

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }
}
