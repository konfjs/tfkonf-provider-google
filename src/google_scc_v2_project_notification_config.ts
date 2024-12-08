import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2ProjectNotificationConfigArgsStreamingConfig {
  filter: string;
}

export interface GoogleSccV2ProjectNotificationConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccV2ProjectNotificationConfigArgs {
  config_id: string;
  description?: string;
  location?: string;
  pubsub_topic?: string;
  streaming_config: GoogleSccV2ProjectNotificationConfigArgsStreamingConfig;
  timeouts?: GoogleSccV2ProjectNotificationConfigArgsTimeouts;
}

export class google_scc_v2_project_notification_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccV2ProjectNotificationConfigArgs) {
    const meta = {streaming_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_v2_project_notification_config", resourceName);
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

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }
}
