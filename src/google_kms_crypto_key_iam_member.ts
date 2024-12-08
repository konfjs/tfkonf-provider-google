import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsCryptoKeyIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleKmsCryptoKeyIamMemberArgs {
  crypto_key_id: string;
  member: string;
  role: string;
  condition?: GoogleKmsCryptoKeyIamMemberArgsCondition;
}

export class google_kms_crypto_key_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleKmsCryptoKeyIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_kms_crypto_key_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
