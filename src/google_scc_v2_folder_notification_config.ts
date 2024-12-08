import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2FolderNotificationConfigArgsStreamingConfig {
  filter: string;
}

export interface GoogleSccV2FolderNotificationConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccV2FolderNotificationConfigArgs {
  config_id: string;
  description?: string;
  folder: string;
  location?: string;
  pubsub_topic: string;
  streaming_config: GoogleSccV2FolderNotificationConfigArgsStreamingConfig;
  timeouts?: GoogleSccV2FolderNotificationConfigArgsTimeouts;
}

export class google_scc_v2_folder_notification_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSccV2FolderNotificationConfigArgs) {
    const meta = {streaming_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_v2_folder_notification_config", resourceName);
  }

  get config_id(): string {
    return `${this.resourceType}.${this.resourceName}.config_id`;
  }

  get folder(): string {
    return `${this.resourceType}.${this.resourceName}.folder`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get pubsub_topic(): string {
    return `${this.resourceType}.${this.resourceName}.pubsub_topic`;
  }

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }
}
