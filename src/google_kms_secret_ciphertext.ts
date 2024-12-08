import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsSecretCiphertextArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleKmsSecretCiphertextArgs {
  additional_authenticated_data?: string;
  crypto_key: string;
  plaintext: string;
  timeouts?: GoogleKmsSecretCiphertextArgsTimeouts;
}

export class google_kms_secret_ciphertext extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleKmsSecretCiphertextArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_kms_secret_ciphertext", resourceName);
  }

  get ciphertext(): string {
    return `${this.resourceType}.${this.resourceName}.ciphertext`;
  }

  get crypto_key(): string {
    return `${this.resourceType}.${this.resourceName}.crypto_key`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get plaintext(): string {
    return `${this.resourceType}.${this.resourceName}.plaintext`;
  }
}
