import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleKmsCryptoKeyVersionsArgs {
  crypto_key: string;
  filter?: string;
}

export class data_google_kms_crypto_key_versions extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleKmsCryptoKeyVersionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_kms_crypto_key_versions", resourceName);
  }

  get crypto_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.crypto_key`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get public_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_key`;
  }

  get versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.versions`;
  }
}
