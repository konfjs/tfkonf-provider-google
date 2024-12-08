import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleKmsCryptoKeysArgs {
  filter?: string;
  key_ring: string;
}

export class data_google_kms_crypto_keys extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleKmsCryptoKeysArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_kms_crypto_keys", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_ring(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_ring`;
  }

  get keys(): string {
    return `data.${this.resourceType}.${this.resourceName}.keys`;
  }
}
