import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleKmsCryptoKeyVersionArgs {
  crypto_key: string;
  version?: number;
}

export class data_google_kms_crypto_key_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleKmsCryptoKeyVersionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_kms_crypto_key_version", resourceName);
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
}
