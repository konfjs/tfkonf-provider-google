import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDatabaseMigrationServiceMigrationJobArgsDumpFlagsDumpFlags {
  name?: string;
  value?: string;
}

export interface GoogleDatabaseMigrationServiceMigrationJobArgsDumpFlags {
  dump_flags?: GoogleDatabaseMigrationServiceMigrationJobArgsDumpFlagsDumpFlags[];
}

export interface GoogleDatabaseMigrationServiceMigrationJobArgsPerformanceConfig {
  dump_parallel_level?: string;
}

export interface GoogleDatabaseMigrationServiceMigrationJobArgsReverseSshConnectivity {
  vm?: string;
  vm_ip?: string;
  vm_port?: number;
  vpc?: string;
}

export interface GoogleDatabaseMigrationServiceMigrationJobArgsStaticIpConnectivity {
}

export interface GoogleDatabaseMigrationServiceMigrationJobArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDatabaseMigrationServiceMigrationJobArgsVpcPeeringConnectivity {
  vpc?: string;
}

export interface GoogleDatabaseMigrationServiceMigrationJobArgs {
  destination: string;
  display_name?: string;
  dump_path?: string;
  dump_type?: string;
  labels?: { [key: string]: string };
  location?: string;
  migration_job_id: string;
  source: string;
  type: string;
  dump_flags?: GoogleDatabaseMigrationServiceMigrationJobArgsDumpFlags;
  performance_config?: GoogleDatabaseMigrationServiceMigrationJobArgsPerformanceConfig;
  reverse_ssh_connectivity?: GoogleDatabaseMigrationServiceMigrationJobArgsReverseSshConnectivity;
  static_ip_connectivity?: GoogleDatabaseMigrationServiceMigrationJobArgsStaticIpConnectivity;
  timeouts?: GoogleDatabaseMigrationServiceMigrationJobArgsTimeouts;
  vpc_peering_connectivity?: GoogleDatabaseMigrationServiceMigrationJobArgsVpcPeeringConnectivity;
}

export class google_database_migration_service_migration_job extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDatabaseMigrationServiceMigrationJobArgs) {
    const meta = {dump_flags:{isBlock:true,dump_flags:{isBlock:true}},performance_config:{isBlock:true},reverse_ssh_connectivity:{isBlock:true},static_ip_connectivity:{isBlock:true},timeouts:{isBlock:true},vpc_peering_connectivity:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_database_migration_service_migration_job", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get destination(): string {
    return `${this.resourceType}.${this.resourceName}.destination`;
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

  get migration_job_id(): string {
    return `${this.resourceType}.${this.resourceName}.migration_job_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get phase(): string {
    return `${this.resourceType}.${this.resourceName}.phase`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get source(): string {
    return `${this.resourceType}.${this.resourceName}.source`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
