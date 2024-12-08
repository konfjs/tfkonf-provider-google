import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareDicomStoreArgsNotificationConfig {
  pubsub_topic: string;
  send_for_bulk_import?: boolean;
}

export interface GoogleHealthcareDicomStoreArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleHealthcareDicomStoreArgs {
  dataset: string;
  labels?: { [key: string]: string };
  name: string;
  notification_config?: GoogleHealthcareDicomStoreArgsNotificationConfig;
  timeouts?: GoogleHealthcareDicomStoreArgsTimeouts;
}

export class google_healthcare_dicom_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleHealthcareDicomStoreArgs) {
    const meta = {notification_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_dicom_store", resourceName);
  }

  get dataset(): string {
    return `${this.resourceType}.${this.resourceName}.dataset`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
