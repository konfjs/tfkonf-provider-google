import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsKeyRingIamPolicyArgs {
  key_ring_id: string;
  policy_data: string;
}

export class google_kms_key_ring_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleKmsKeyRingIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_kms_key_ring_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_ring_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_ring_id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
