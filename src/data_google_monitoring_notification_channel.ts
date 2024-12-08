import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleMonitoringNotificationChannelArgs {
  display_name?: string;
  labels?: { [key: string]: string };
  project?: string;
  type?: string;
  user_labels?: { [key: string]: string };
}

export class data_google_monitoring_notification_channel extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleMonitoringNotificationChannelArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_monitoring_notification_channel", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled`;
  }

  get force_delete(): string {
    return `data.${this.resourceType}.${this.resourceName}.force_delete`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get sensitive_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.sensitive_labels`;
  }

  get verification_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.verification_status`;
  }
}
