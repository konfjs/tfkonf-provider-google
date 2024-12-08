import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBillingProjectInfoArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBillingProjectInfoArgs {
  billing_account: string;
  timeouts?: GoogleBillingProjectInfoArgsTimeouts;
}

export class google_billing_project_info extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBillingProjectInfoArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_billing_project_info", resourceName);
  }

  get billing_account(): string {
    return `${this.resourceType}.${this.resourceName}.billing_account`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
