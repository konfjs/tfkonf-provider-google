import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleLoggingFolderSettingsArgs {
  folder: string;
}

export class data_google_logging_folder_settings extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleLoggingFolderSettingsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_logging_folder_settings", resourceName);
  }

  get disable_default_sink(): string {
    return `data.${this.resourceType}.${this.resourceName}.disable_default_sink`;
  }

  get folder(): string {
    return `data.${this.resourceType}.${this.resourceName}.folder`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_name`;
  }

  get kms_service_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_service_account_id`;
  }

  get logging_service_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.logging_service_account_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get storage_location(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_location`;
  }
}
