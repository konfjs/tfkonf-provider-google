import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBillingAccountIamPolicyArgs {
  billing_account_id: string;
  policy_data: string;
}

export class google_billing_account_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBillingAccountIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_billing_account_iam_policy", resourceName);
  }

  get billing_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.billing_account_id`;
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
}
