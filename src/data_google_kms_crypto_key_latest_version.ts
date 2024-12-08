import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleKmsCryptoKeyLatestVersionArgs {
  crypto_key: string;
  filter?: string;
}

export class data_google_kms_crypto_key_latest_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleKmsCryptoKeyLatestVersionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_kms_crypto_key_latest_version", resourceName);
  }

  get algorithm(): string {
    return `data.${this.resourceType}.${this.resourceName}.algorithm`;
  }

  get crypto_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.crypto_key`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get protection_level(): string {
    return `data.${this.resourceType}.${this.resourceName}.protection_level`;
  }

  get public_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_key`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
