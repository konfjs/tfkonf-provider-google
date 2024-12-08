import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOracleDatabaseAutonomousDatabaseArgsPropertiesCustomerContacts {
  email: string;
}

export interface GoogleOracleDatabaseAutonomousDatabaseArgsProperties {
  character_set?: string;
  db_edition?: string;
  db_version?: string;
  db_workload: string;
  is_auto_scaling_enabled?: boolean;
  license_type: string;
  mtls_connection_required?: boolean;
  n_character_set?: string;
  customer_contacts?: GoogleOracleDatabaseAutonomousDatabaseArgsPropertiesCustomerContacts[];
}

export interface GoogleOracleDatabaseAutonomousDatabaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleOracleDatabaseAutonomousDatabaseArgs {
  admin_password?: string;
  autonomous_database_id: string;
  cidr: string;
  database: string;
  labels?: { [key: string]: string };
  location: string;
  network: string;
  properties: GoogleOracleDatabaseAutonomousDatabaseArgsProperties;
  timeouts?: GoogleOracleDatabaseAutonomousDatabaseArgsTimeouts;
}

export class google_oracle_database_autonomous_database extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleOracleDatabaseAutonomousDatabaseArgs) {
    const meta = {properties:{isBlock:true,customer_contacts:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_oracle_database_autonomous_database", resourceName);
  }

  get autonomous_database_id(): string {
    return `${this.resourceType}.${this.resourceName}.autonomous_database_id`;
  }

  get cidr(): string {
    return `${this.resourceType}.${this.resourceName}.cidr`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get database(): string {
    return `${this.resourceType}.${this.resourceName}.database`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get entitlement_id(): string {
    return `${this.resourceType}.${this.resourceName}.entitlement_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
