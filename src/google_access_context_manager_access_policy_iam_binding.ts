import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerAccessPolicyIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleAccessContextManagerAccessPolicyIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition?: GoogleAccessContextManagerAccessPolicyIamBindingArgsCondition;
}

export class google_access_context_manager_access_policy_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessPolicyIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_access_policy_iam_binding", resourceName);
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
