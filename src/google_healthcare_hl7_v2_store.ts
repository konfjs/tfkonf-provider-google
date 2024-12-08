import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareHl7V2StoreArgsNotificationConfig {
  pubsub_topic: string;
}

export interface GoogleHealthcareHl7V2StoreArgsNotificationConfigs {
  filter?: string;
  pubsub_topic: string;
}

export interface GoogleHealthcareHl7V2StoreArgsParserConfig {
  allow_null_header?: boolean;
  schema?: string;
  segment_terminator?: string;
  version?: string;
}

export interface GoogleHealthcareHl7V2StoreArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleHealthcareHl7V2StoreArgs {
  dataset: string;
  labels?: { [key: string]: string };
  name: string;
  reject_duplicate_message?: boolean;
  notification_config?: GoogleHealthcareHl7V2StoreArgsNotificationConfig;
  notification_configs?: GoogleHealthcareHl7V2StoreArgsNotificationConfigs[];
  parser_config?: GoogleHealthcareHl7V2StoreArgsParserConfig;
  timeouts?: GoogleHealthcareHl7V2StoreArgsTimeouts;
}

export class google_healthcare_hl7_v2_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleHealthcareHl7V2StoreArgs) {
    const meta = {notification_config:{isBlock:true},notification_configs:{isBlock:true},parser_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_hl7_v2_store", resourceName);
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
