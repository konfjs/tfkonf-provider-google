import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageNotificationArgs {
  bucket: string;
  custom_attributes?: { [key: string]: string };
  event_types?: string[];
  object_name_prefix?: string;
  payload_format: string;
  topic: string;
}

export class google_storage_notification extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageNotificationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_storage_notification", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get notification_id(): string {
    return `${this.resourceType}.${this.resourceName}.notification_id`;
  }

  get payload_format(): string {
    return `${this.resourceType}.${this.resourceName}.payload_format`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get topic(): string {
    return `${this.resourceType}.${this.resourceName}.topic`;
  }
}
