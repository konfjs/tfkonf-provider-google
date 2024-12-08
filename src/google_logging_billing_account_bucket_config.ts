import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingBillingAccountBucketConfigArgsCmekSettings {
  kms_key_name: string;
}

export interface GoogleLoggingBillingAccountBucketConfigArgsIndexConfigs {
  field_path: string;
  type: string;
}

export interface GoogleLoggingBillingAccountBucketConfigArgs {
  billing_account: string;
  bucket_id: string;
  location: string;
  retention_days?: number;
  cmek_settings?: GoogleLoggingBillingAccountBucketConfigArgsCmekSettings;
  index_configs?: GoogleLoggingBillingAccountBucketConfigArgsIndexConfigs[];
}

export class google_logging_billing_account_bucket_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleLoggingBillingAccountBucketConfigArgs) {
    const meta = {cmek_settings:{isBlock:true},index_configs:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_billing_account_bucket_config", resourceName);
  }

  get billing_account(): string {
    return `${this.resourceType}.${this.resourceName}.billing_account`;
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
}
