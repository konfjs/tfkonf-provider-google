import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerAccessPolicyIamPolicyArgs {
  name: string;
  policy_data: string;
}

export class google_access_context_manager_access_policy_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessPolicyIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_access_policy_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
