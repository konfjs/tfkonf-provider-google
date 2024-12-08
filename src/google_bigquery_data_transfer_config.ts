import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryDataTransferConfigArgsEmailPreferences {
  enable_failure_email: boolean;
}

export interface GoogleBigqueryDataTransferConfigArgsEncryptionConfiguration {
  kms_key_name: string;
}

export interface GoogleBigqueryDataTransferConfigArgsScheduleOptions {
  disable_auto_scheduling?: boolean;
  end_time?: string;
  start_time?: string;
}

export interface GoogleBigqueryDataTransferConfigArgsSensitiveParams {
  secret_access_key: string;
}

export interface GoogleBigqueryDataTransferConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryDataTransferConfigArgs {
  data_refresh_window_days?: number;
  data_source_id: string;
  destination_dataset_id?: string;
  disabled?: boolean;
  display_name: string;
  location?: string;
  notification_pubsub_topic?: string;
  params: { [key: string]: string };
  schedule?: string;
  service_account_name?: string;
  email_preferences?: GoogleBigqueryDataTransferConfigArgsEmailPreferences;
  encryption_configuration?: GoogleBigqueryDataTransferConfigArgsEncryptionConfiguration;
  schedule_options?: GoogleBigqueryDataTransferConfigArgsScheduleOptions;
  sensitive_params?: GoogleBigqueryDataTransferConfigArgsSensitiveParams;
  timeouts?: GoogleBigqueryDataTransferConfigArgsTimeouts;
}

export class google_bigquery_data_transfer_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigqueryDataTransferConfigArgs) {
    const meta = {email_preferences:{isBlock:true},encryption_configuration:{isBlock:true},schedule_options:{isBlock:true},sensitive_params:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_data_transfer_config", resourceName);
  }

  get data_source_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_source_id`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get params(): string {
    return `${this.resourceType}.${this.resourceName}.params`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
