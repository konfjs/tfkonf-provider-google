import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvironmentIamPolicyArgs {
  env_id: string;
  org_id: string;
  policy_data: string;
}

export class google_apigee_environment_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeEnvironmentIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_apigee_environment_iam_policy", resourceName);
  }

  get env_id(): string {
    return `${this.resourceType}.${this.resourceName}.env_id`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
