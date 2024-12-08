import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingFolderBucketConfigArgsCmekSettings {
  kms_key_name: string;
}

export interface GoogleLoggingFolderBucketConfigArgsIndexConfigs {
  field_path: string;
  type: string;
}

export interface GoogleLoggingFolderBucketConfigArgs {
  bucket_id: string;
  folder: string;
  location: string;
  retention_days?: number;
  cmek_settings?: GoogleLoggingFolderBucketConfigArgsCmekSettings;
  index_configs?: GoogleLoggingFolderBucketConfigArgsIndexConfigs[];
}

export class google_logging_folder_bucket_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleLoggingFolderBucketConfigArgs) {
    const meta = {cmek_settings:{isBlock:true},index_configs:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_folder_bucket_config", resourceName);
  }

  get bucket_id(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_id`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get folder(): string {
    return `${this.resourceType}.${this.resourceName}.folder`;
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
}
