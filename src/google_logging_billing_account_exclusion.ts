import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingBillingAccountExclusionArgs {
  billing_account: string;
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}

export class google_logging_billing_account_exclusion extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleLoggingBillingAccountExclusionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_logging_billing_account_exclusion", resourceName);
  }

  get billing_account(): string {
    return `${this.resourceType}.${this.resourceName}.billing_account`;
  }

  get filter(): string {
    return `${this.resourceType}.${this.resourceName}.filter`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
