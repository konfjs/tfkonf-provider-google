import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingBillingAccountSinkArgsBigqueryOptions {
  use_partitioned_tables: boolean;
}

export interface GoogleLoggingBillingAccountSinkArgsExclusions {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}

export interface GoogleLoggingBillingAccountSinkArgs {
  billing_account: string;
  description?: string;
  destination: string;
  disabled?: boolean;
  filter?: string;
  name: string;
  bigquery_options?: GoogleLoggingBillingAccountSinkArgsBigqueryOptions;
  exclusions?: GoogleLoggingBillingAccountSinkArgsExclusions[];
}

export class google_logging_billing_account_sink extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleLoggingBillingAccountSinkArgs) {
    const meta = {bigquery_options:{isBlock:true},exclusions:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_billing_account_sink", resourceName);
  }

  get billing_account(): string {
    return `${this.resourceType}.${this.resourceName}.billing_account`;
  }

  get destination(): string {
    return `${this.resourceType}.${this.resourceName}.destination`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get writer_identity(): string {
    return `${this.resourceType}.${this.resourceName}.writer_identity`;
  }
}
