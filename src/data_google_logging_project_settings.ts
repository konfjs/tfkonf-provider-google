import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleLoggingProjectSettingsArgs {
  project: string;
}

export class data_google_logging_project_settings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleLoggingProjectSettingsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_logging_project_settings", resourceName);
  }

  get disable_default_sink(): string {
    return `data.${this.resourceType}.${this.resourceName}.disable_default_sink`;
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

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get storage_location(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_location`;
  }
}
