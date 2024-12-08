import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleServiceAccountIamPolicyArgs {
  policy_data: string;
  service_account_id: string;
}

export class google_service_account_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleServiceAccountIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_service_account_iam_policy", resourceName);
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

  get service_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_account_id`;
  }
}
