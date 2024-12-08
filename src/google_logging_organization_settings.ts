import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingOrganizationSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleLoggingOrganizationSettingsArgs {
  organization: string;
  timeouts?: GoogleLoggingOrganizationSettingsArgsTimeouts;
}

export class google_logging_organization_settings extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleLoggingOrganizationSettingsArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_organization_settings", resourceName);
  }

  get disable_default_sink(): string {
    return `${this.resourceType}.${this.resourceName}.disable_default_sink`;
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

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }

  get storage_location(): string {
    return `${this.resourceType}.${this.resourceName}.storage_location`;
  }
}
