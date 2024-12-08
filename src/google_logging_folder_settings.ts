import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingFolderSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleLoggingFolderSettingsArgs {
  folder: string;
  timeouts?: GoogleLoggingFolderSettingsArgsTimeouts;
}

export class google_logging_folder_settings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleLoggingFolderSettingsArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_folder_settings", resourceName);
  }

  get disable_default_sink(): string {
    return `${this.resourceType}.${this.resourceName}.disable_default_sink`;
  }

  get folder(): string {
    return `${this.resourceType}.${this.resourceName}.folder`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_name(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_name`;
  }

  get kms_service_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.kms_service_account_id`;
  }

  get logging_service_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.logging_service_account_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get storage_location(): string {
    return `${this.resourceType}.${this.resourceName}.storage_location`;
  }
}
