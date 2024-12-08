import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerAccessPolicyIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleAccessContextManagerAccessPolicyIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition?: GoogleAccessContextManagerAccessPolicyIamMemberArgsCondition;
}

export class google_access_context_manager_access_policy_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAccessContextManagerAccessPolicyIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_access_policy_iam_member", resourceName);
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
