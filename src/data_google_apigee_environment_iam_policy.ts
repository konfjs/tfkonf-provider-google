import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleApigeeEnvironmentIamPolicyArgs {
  env_id: string;
  org_id: string;
}

export class data_google_apigee_environment_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleApigeeEnvironmentIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_apigee_environment_iam_policy", resourceName);
  }

  get env_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.env_id`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get org_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.org_id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
