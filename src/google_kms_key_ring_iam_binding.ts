import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsKeyRingIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleKmsKeyRingIamBindingArgs {
  key_ring_id: string;
  members: string[];
  role: string;
  condition?: GoogleKmsKeyRingIamBindingArgsCondition;
}

export class google_kms_key_ring_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleKmsKeyRingIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_kms_key_ring_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
