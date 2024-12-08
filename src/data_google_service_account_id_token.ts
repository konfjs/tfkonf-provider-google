import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleServiceAccountIdTokenArgs {
  delegates?: string[];
  include_email?: boolean;
  target_audience: string;
  target_service_account?: string;
}

export class data_google_service_account_id_token extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleServiceAccountIdTokenArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_service_account_id_token", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get id_token(): string {
    return `data.${this.resourceType}.${this.resourceName}.id_token`;
  }

  get target_audience(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_audience`;
  }
}
