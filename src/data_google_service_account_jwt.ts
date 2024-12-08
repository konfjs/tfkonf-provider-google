import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleServiceAccountJwtArgs {
  delegates?: string[];
  expires_in?: number;
  payload: string;
  target_service_account: string;
}

export class data_google_service_account_jwt extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleServiceAccountJwtArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_service_account_jwt", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get jwt(): string {
    return `data.${this.resourceType}.${this.resourceName}.jwt`;
  }

  get payload(): string {
    return `data.${this.resourceType}.${this.resourceName}.payload`;
  }

  get target_service_account(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_service_account`;
  }
}
