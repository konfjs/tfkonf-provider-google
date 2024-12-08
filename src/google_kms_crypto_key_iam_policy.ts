import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsCryptoKeyIamPolicyArgs {
  crypto_key_id: string;
  policy_data: string;
}

export class google_kms_crypto_key_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleKmsCryptoKeyIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_kms_crypto_key_iam_policy", resourceName);
  }

  get crypto_key_id(): string {
    return `${this.resourceType}.${this.resourceName}.crypto_key_id`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
