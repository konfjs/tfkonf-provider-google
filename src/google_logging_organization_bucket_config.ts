import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingOrganizationBucketConfigArgsCmekSettings {
  kms_key_name: string;
}

export interface GoogleLoggingOrganizationBucketConfigArgsIndexConfigs {
  field_path: string;
  type: string;
}

export interface GoogleLoggingOrganizationBucketConfigArgs {
  bucket_id: string;
  location: string;
  organization: string;
  retention_days?: number;
  cmek_settings?: GoogleLoggingOrganizationBucketConfigArgsCmekSettings;
  index_configs?: GoogleLoggingOrganizationBucketConfigArgsIndexConfigs[];
}

export class google_logging_organization_bucket_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleLoggingOrganizationBucketConfigArgs) {
    const meta = {cmek_settings:{isBlock:true},index_configs:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_organization_bucket_config", resourceName);
  }

  get bucket_id(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_id`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lifecycle_state(): string {
    return `${this.resourceType}.${this.resourceName}.lifecycle_state`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }
}
