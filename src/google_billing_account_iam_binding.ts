import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBillingAccountIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBillingAccountIamBindingArgs {
  billing_account_id: string;
  members: string[];
  role: string;
  condition?: GoogleBillingAccountIamBindingArgsCondition;
}

export class google_billing_account_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBillingAccountIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_billing_account_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
