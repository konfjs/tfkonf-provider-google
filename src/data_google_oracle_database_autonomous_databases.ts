import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleOracleDatabaseAutonomousDatabasesArgs {
  location: string;
  project?: string;
}

export class data_google_oracle_database_autonomous_databases extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleOracleDatabaseAutonomousDatabasesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_oracle_database_autonomous_databases", resourceName);
  }

  get autonomous_databases(): string {
    return `data.${this.resourceType}.${this.resourceName}.autonomous_databases`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }
}
