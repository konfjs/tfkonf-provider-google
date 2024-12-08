import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleLoggingProjectCmekSettingsArgs {
  kms_key_name?: string;
  project: string;
}

export class data_google_logging_project_cmek_settings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleLoggingProjectCmekSettingsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_logging_project_cmek_settings", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_version_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_version_name`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get service_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_account_id`;
  }
}
