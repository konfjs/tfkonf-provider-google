import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleKmsSecretArgs {
  additional_authenticated_data?: string;
  ciphertext: string;
  crypto_key: string;
}

export class data_google_kms_secret extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleKmsSecretArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_kms_secret", resourceName);
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
