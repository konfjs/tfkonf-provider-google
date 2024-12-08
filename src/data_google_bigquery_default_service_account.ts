import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBigqueryDefaultServiceAccountArgs {
}

export class data_google_bigquery_default_service_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleBigqueryDefaultServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_bigquery_default_service_account", resourceName);
  }

  get email(): string {
    return `data.${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `data.${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
