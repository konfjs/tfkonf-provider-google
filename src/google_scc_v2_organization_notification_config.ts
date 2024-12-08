import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2OrganizationNotificationConfigArgsStreamingConfig {
  filter: string;
}

export interface GoogleSccV2OrganizationNotificationConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccV2OrganizationNotificationConfigArgs {
  config_id: string;
  description?: string;
  location?: string;
  organization: string;
  pubsub_topic: string;
  streaming_config: GoogleSccV2OrganizationNotificationConfigArgsStreamingConfig;
  timeouts?: GoogleSccV2OrganizationNotificationConfigArgsTimeouts;
}

export class google_scc_v2_organization_notification_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccV2OrganizationNotificationConfigArgs) {
    const meta = {streaming_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_v2_organization_notification_config", resourceName);
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
