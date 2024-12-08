import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBillingSubaccountArgs {
  deletion_policy?: string;
  display_name: string;
  master_billing_account: string;
}

export class google_billing_subaccount extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBillingSubaccountArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_billing_subaccount", resourceName);
  }

  get billing_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.billing_account_id`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get master_billing_account(): string {
    return `${this.resourceType}.${this.resourceName}.master_billing_account`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get open(): string {
    return `${this.resourceType}.${this.resourceName}.open`;
  }
}
