import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSqlTiersArgs {
}

export class data_google_sql_tiers extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleSqlTiersArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_sql_tiers", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get tiers(): string {
    return `data.${this.resourceType}.${this.resourceName}.tiers`;
  }
}
