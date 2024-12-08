import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleKmsKeyRingIamPolicyArgs {
  key_ring_id: string;
}

export class data_google_kms_key_ring_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleKmsKeyRingIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_kms_key_ring_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_ring_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_ring_id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
