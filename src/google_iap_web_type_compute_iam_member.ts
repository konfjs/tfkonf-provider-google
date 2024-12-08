import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebTypeComputeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapWebTypeComputeIamMemberArgs {
  member: string;
  role: string;
  condition?: GoogleIapWebTypeComputeIamMemberArgsCondition;
}

export class google_iap_web_type_compute_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapWebTypeComputeIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_web_type_compute_iam_member", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
