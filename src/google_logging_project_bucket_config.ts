import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingProjectBucketConfigArgsCmekSettings {
  kms_key_name: string;
}

export interface GoogleLoggingProjectBucketConfigArgsIndexConfigs {
  field_path: string;
  type: string;
}

export interface GoogleLoggingProjectBucketConfigArgs {
  bucket_id: string;
  enable_analytics?: boolean;
  location: string;
  locked?: boolean;
  project: string;
  retention_days?: number;
  cmek_settings?: GoogleLoggingProjectBucketConfigArgsCmekSettings;
  index_configs?: GoogleLoggingProjectBucketConfigArgsIndexConfigs[];
}

export class google_logging_project_bucket_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleLoggingProjectBucketConfigArgs) {
    const meta = {cmek_settings:{isBlock:true},index_configs:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_project_bucket_config", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
