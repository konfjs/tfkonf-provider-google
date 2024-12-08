import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMonitoringNotificationChannelArgsSensitiveLabels {
  auth_token?: string;
  password?: string;
  service_key?: string;
}

export interface GoogleMonitoringNotificationChannelArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMonitoringNotificationChannelArgs {
  description?: string;
  display_name?: string;
  enabled?: boolean;
  force_delete?: boolean;
  labels?: { [key: string]: string };
  type: string;
  user_labels?: { [key: string]: string };
  sensitive_labels?: GoogleMonitoringNotificationChannelArgsSensitiveLabels;
  timeouts?: GoogleMonitoringNotificationChannelArgsTimeouts;
}

export class google_monitoring_notification_channel extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleMonitoringNotificationChannelArgs) {
    const meta = {sensitive_labels:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_monitoring_notification_channel", resourceName);
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

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get verification_status(): string {
    return `${this.resourceType}.${this.resourceName}.verification_status`;
  }
}
