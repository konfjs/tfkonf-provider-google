import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleKmsSecretCiphertextArgs {
  crypto_key: string;
  plaintext: string;
}

export class data_google_kms_secret_ciphertext extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleKmsSecretCiphertextArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_kms_secret_ciphertext", resourceName);
  }

  get ciphertext(): string {
    return `data.${this.resourceType}.${this.resourceName}.ciphertext`;
  }

  get crypto_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.crypto_key`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get plaintext(): string {
    return `data.${this.resourceType}.${this.resourceName}.plaintext`;
  }
}
