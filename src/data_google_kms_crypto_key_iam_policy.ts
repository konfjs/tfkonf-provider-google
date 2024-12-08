import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleKmsCryptoKeyIamPolicyArgs {
  crypto_key_id: string;
}

export class data_google_kms_crypto_key_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleKmsCryptoKeyIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_kms_crypto_key_iam_policy", resourceName);
  }

  get crypto_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.crypto_key_id`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
