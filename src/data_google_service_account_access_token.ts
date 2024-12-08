import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleServiceAccountAccessTokenArgs {
  delegates?: string[];
  lifetime?: string;
  scopes: string[];
  target_service_account: string;
}

export class data_google_service_account_access_token extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleServiceAccountAccessTokenArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_service_account_access_token", resourceName);
  }

  get access_token(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_token`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get scopes(): string {
    return `data.${this.resourceType}.${this.resourceName}.scopes`;
  }

  get target_service_account(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_service_account`;
  }
}
