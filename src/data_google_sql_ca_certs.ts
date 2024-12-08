import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSqlCaCertsArgs {
  instance: string;
}

export class data_google_sql_ca_certs extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleSqlCaCertsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_sql_ca_certs", resourceName);
  }

  get active_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.active_version`;
  }

  get certs(): string {
    return `data.${this.resourceType}.${this.resourceName}.certs`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
