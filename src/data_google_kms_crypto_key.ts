import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleKmsCryptoKeyArgs {
  key_ring: string;
  name: string;
}

export class data_google_kms_crypto_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleKmsCryptoKeyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_kms_crypto_key", resourceName);
  }

  get crypto_key_backend(): string {
    return `data.${this.resourceType}.${this.resourceName}.crypto_key_backend`;
  }

  get destroy_scheduled_duration(): string {
    return `data.${this.resourceType}.${this.resourceName}.destroy_scheduled_duration`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get import_only(): string {
    return `data.${this.resourceType}.${this.resourceName}.import_only`;
  }

  get key_ring(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_ring`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get primary(): string {
    return `data.${this.resourceType}.${this.resourceName}.primary`;
  }

  get purpose(): string {
    return `data.${this.resourceType}.${this.resourceName}.purpose`;
  }

  get rotation_period(): string {
    return `data.${this.resourceType}.${this.resourceName}.rotation_period`;
  }

  get skip_initial_version_creation(): string {
    return `data.${this.resourceType}.${this.resourceName}.skip_initial_version_creation`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get version_template(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_template`;
  }
}
