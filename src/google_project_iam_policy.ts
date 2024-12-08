import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectIamPolicyArgs {
  policy_data: string;
  project: string;
}

export class google_project_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleProjectIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_project_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
