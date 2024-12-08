import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSqlBackupRunArgs {
  instance: string;
  most_recent?: boolean;
}

export class data_google_sql_backup_run extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSqlBackupRunArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_sql_backup_run", resourceName);
  }

  get backup_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.backup_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get start_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.start_time`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }
}
