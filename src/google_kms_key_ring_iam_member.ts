import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsKeyRingIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleKmsKeyRingIamMemberArgs {
  key_ring_id: string;
  member: string;
  role: string;
  condition?: GoogleKmsKeyRingIamMemberArgsCondition;
}

export class google_kms_key_ring_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleKmsKeyRingIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_kms_key_ring_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
