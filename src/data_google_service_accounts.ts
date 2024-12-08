import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleServiceAccountsArgs {
  project?: string;
}

export class data_google_service_accounts extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleServiceAccountsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_service_accounts", resourceName);
  }

  get accounts(): string {
    return `data.${this.resourceType}.${this.resourceName}.accounts`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
