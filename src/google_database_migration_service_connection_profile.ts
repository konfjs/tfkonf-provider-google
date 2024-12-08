import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsInitialUser {
  password: string;
  user: string;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsPrimaryInstanceSettingsMachineConfig {
  cpu_count: number;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsPrimaryInstanceSettings {
  database_flags?: { [key: string]: string };
  id: string;
  labels?: { [key: string]: string };
  machine_config: GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsPrimaryInstanceSettingsMachineConfig;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettings {
  labels?: { [key: string]: string };
  vpc_network: string;
  initial_user: GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsInitialUser;
  primary_instance_settings?: GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettingsPrimaryInstanceSettings;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydb {
  cluster_id: string;
  settings?: GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydbSettings;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettingsIpConfigAuthorizedNetworks {
  expire_time?: string;
  label?: string;
  ttl?: string;
  value: string;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettingsIpConfig {
  enable_ipv4?: boolean;
  private_network?: string;
  require_ssl?: boolean;
  authorized_networks?: GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettingsIpConfigAuthorizedNetworks[];
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettings {
  activation_policy?: string;
  auto_storage_increase?: boolean;
  cmek_key_name?: string;
  collation?: string;
  data_disk_size_gb?: string;
  data_disk_type?: string;
  database_flags?: { [key: string]: string };
  database_version?: string;
  edition?: string;
  root_password?: string;
  source_id: string;
  storage_auto_resize_limit?: string;
  tier?: string;
  user_labels?: { [key: string]: string };
  zone?: string;
  ip_config?: GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettingsIpConfig;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsql {
  settings?: GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsqlSettings;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsMysqlSsl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsMysql {
  cloud_sql_id?: string;
  host?: string;
  password?: string;
  port?: number;
  username?: string;
  ssl?: GoogleDatabaseMigrationServiceConnectionProfileArgsMysqlSsl;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsOracleForwardSshConnectivity {
  hostname: string;
  password?: string;
  port: number;
  private_key?: string;
  username: string;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsOraclePrivateConnectivity {
  private_connection: string;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsOracleSsl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsOracleStaticServiceIpConnectivity {
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsOracle {
  database_service: string;
  host: string;
  password: string;
  port: number;
  username: string;
  forward_ssh_connectivity?: GoogleDatabaseMigrationServiceConnectionProfileArgsOracleForwardSshConnectivity;
  private_connectivity?: GoogleDatabaseMigrationServiceConnectionProfileArgsOraclePrivateConnectivity;
  ssl?: GoogleDatabaseMigrationServiceConnectionProfileArgsOracleSsl;
  static_service_ip_connectivity?: GoogleDatabaseMigrationServiceConnectionProfileArgsOracleStaticServiceIpConnectivity;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsPostgresqlSsl {
  ca_certificate: string;
  client_certificate?: string;
  client_key?: string;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsPostgresql {
  alloydb_cluster_id?: string;
  cloud_sql_id?: string;
  host?: string;
  password?: string;
  port?: number;
  username?: string;
  ssl?: GoogleDatabaseMigrationServiceConnectionProfileArgsPostgresqlSsl;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDatabaseMigrationServiceConnectionProfileArgs {
  connection_profile_id: string;
  display_name?: string;
  labels?: { [key: string]: string };
  location?: string;
  alloydb?: GoogleDatabaseMigrationServiceConnectionProfileArgsAlloydb;
  cloudsql?: GoogleDatabaseMigrationServiceConnectionProfileArgsCloudsql;
  mysql?: GoogleDatabaseMigrationServiceConnectionProfileArgsMysql;
  oracle?: GoogleDatabaseMigrationServiceConnectionProfileArgsOracle;
  postgresql?: GoogleDatabaseMigrationServiceConnectionProfileArgsPostgresql;
  timeouts?: GoogleDatabaseMigrationServiceConnectionProfileArgsTimeouts;
}

export class google_database_migration_service_connection_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDatabaseMigrationServiceConnectionProfileArgs) {
    const meta = {alloydb:{isBlock:true,settings:{isBlock:true,initial_user:{isBlock:true},primary_instance_settings:{isBlock:true,machine_config:{isBlock:true}}}},cloudsql:{isBlock:true,settings:{isBlock:true,ip_config:{isBlock:true,authorized_networks:{isBlock:true}}}},mysql:{isBlock:true,ssl:{isBlock:true}},oracle:{isBlock:true,forward_ssh_connectivity:{isBlock:true},private_connectivity:{isBlock:true},ssl:{isBlock:true},static_service_ip_connectivity:{isBlock:true}},postgresql:{isBlock:true,ssl:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_database_migration_service_connection_profile", resourceName);
  }

  get connection_profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.connection_profile_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get dbprovider(): string {
    return `${this.resourceType}.${this.resourceName}.dbprovider`;
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
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
