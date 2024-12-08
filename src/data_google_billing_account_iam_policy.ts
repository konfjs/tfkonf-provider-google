import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBillingAccountIamPolicyArgs {
  billing_account_id: string;
}

export class data_google_billing_account_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleBillingAccountIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_billing_account_iam_policy", resourceName);
  }

  get billing_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.billing_account_id`;
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
}
