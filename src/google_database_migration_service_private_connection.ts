import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDatabaseMigrationServicePrivateConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDatabaseMigrationServicePrivateConnectionArgsVpcPeeringConfig {
  subnet: string;
  vpc_name: string;
}

export interface GoogleDatabaseMigrationServicePrivateConnectionArgs {
  labels?: { [key: string]: string };
  location: string;
  private_connection_id: string;
  timeouts?: GoogleDatabaseMigrationServicePrivateConnectionArgsTimeouts;
  vpc_peering_config: GoogleDatabaseMigrationServicePrivateConnectionArgsVpcPeeringConfig;
}

export class google_database_migration_service_private_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDatabaseMigrationServicePrivateConnectionArgs) {
    const meta = {timeouts:{isBlock:true},vpc_peering_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_database_migration_service_private_connection", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get error(): string {
    return `${this.resourceType}.${this.resourceName}.error`;
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

  get private_connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.private_connection_id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
