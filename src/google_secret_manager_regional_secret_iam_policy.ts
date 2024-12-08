import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecretManagerRegionalSecretIamPolicyArgs {
  policy_data: string;
  secret_id: string;
}

export class google_secret_manager_regional_secret_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSecretManagerRegionalSecretIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_secret_manager_regional_secret_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get secret_id(): string {
    return `${this.resourceType}.${this.resourceName}.secret_id`;
  }
}
