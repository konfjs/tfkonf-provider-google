import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSecretManagerSecretIamPolicyArgs {
  secret_id: string;
}

export class data_google_secret_manager_secret_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleSecretManagerSecretIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_secret_manager_secret_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get secret_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_id`;
  }
}
