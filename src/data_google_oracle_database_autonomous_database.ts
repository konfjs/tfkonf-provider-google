import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleOracleDatabaseAutonomousDatabaseArgs {
  autonomous_database_id: string;
  location: string;
  project?: string;
}

export class data_google_oracle_database_autonomous_database extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleOracleDatabaseAutonomousDatabaseArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_oracle_database_autonomous_database", resourceName);
  }

  get admin_password(): string {
    return `data.${this.resourceType}.${this.resourceName}.admin_password`;
  }

  get autonomous_database_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.autonomous_database_id`;
  }

  get cidr(): string {
    return `data.${this.resourceType}.${this.resourceName}.cidr`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get database(): string {
    return `data.${this.resourceType}.${this.resourceName}.database`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get entitlement_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.entitlement_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.properties`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
