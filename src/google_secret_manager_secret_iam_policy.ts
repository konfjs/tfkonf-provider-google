import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecretManagerSecretIamPolicyArgs {
  policy_data: string;
  secret_id: string;
}

export class google_secret_manager_secret_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSecretManagerSecretIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_secret_manager_secret_iam_policy", resourceName);
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

  get secret_id(): string {
    return `${this.resourceType}.${this.resourceName}.secret_id`;
  }
}
