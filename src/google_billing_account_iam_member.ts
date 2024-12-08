import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBillingAccountIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBillingAccountIamMemberArgs {
  billing_account_id: string;
  member: string;
  role: string;
  condition?: GoogleBillingAccountIamMemberArgsCondition;
}

export class google_billing_account_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBillingAccountIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_billing_account_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
