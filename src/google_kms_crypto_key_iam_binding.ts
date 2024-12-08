import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsCryptoKeyIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleKmsCryptoKeyIamBindingArgs {
  crypto_key_id: string;
  members: string[];
  role: string;
  condition?: GoogleKmsCryptoKeyIamBindingArgsCondition;
}

export class google_kms_crypto_key_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleKmsCryptoKeyIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_kms_crypto_key_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
