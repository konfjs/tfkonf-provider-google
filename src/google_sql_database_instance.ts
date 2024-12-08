import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSqlDatabaseInstanceArgsClone {
  allocated_ip_range?: string;
  database_names?: string[];
  point_in_time?: string;
  preferred_zone?: string;
  source_instance_name: string;
}

export interface GoogleSqlDatabaseInstanceArgsReplicaConfiguration {
  ca_certificate?: string;
  cascadable_replica?: boolean;
  client_certificate?: string;
  client_key?: string;
  connect_retry_interval?: number;
  dump_file_path?: string;
  failover_target?: boolean;
  master_heartbeat_period?: number;
  password?: string;
  ssl_cipher?: string;
  username?: string;
  verify_server_certificate?: boolean;
}

export interface GoogleSqlDatabaseInstanceArgsRestoreBackupContext {
  backup_run_id: number;
  instance_id?: string;
  project?: string;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsActiveDirectoryConfig {
  domain: string;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsAdvancedMachineFeatures {
  threads_per_core?: number;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsBackupConfigurationBackupRetentionSettings {
  retained_backups: number;
  retention_unit?: string;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsBackupConfiguration {
  binary_log_enabled?: boolean;
  enabled?: boolean;
  location?: string;
  point_in_time_recovery_enabled?: boolean;
  backup_retention_settings?: GoogleSqlDatabaseInstanceArgsSettingsBackupConfigurationBackupRetentionSettings;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsDataCacheConfig {
  data_cache_enabled?: boolean;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsDatabaseFlags {
  name: string;
  value: string;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsDenyMaintenancePeriod {
  end_date: string;
  start_date: string;
  time: string;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsInsightsConfig {
  query_insights_enabled?: boolean;
  query_string_length?: number;
  record_application_tags?: boolean;
  record_client_address?: boolean;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationAuthorizedNetworks {
  expiration_time?: string;
  name?: string;
  value: string;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationPscConfigPscAutoConnections {
  consumer_network: string;
  consumer_service_project_id?: string;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationPscConfig {
  allowed_consumer_projects?: string[];
  psc_enabled?: boolean;
  psc_auto_connections?: GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationPscConfigPscAutoConnections[];
}

export interface GoogleSqlDatabaseInstanceArgsSettingsIpConfiguration {
  allocated_ip_range?: string;
  enable_private_path_for_google_cloud_services?: boolean;
  ipv4_enabled?: boolean;
  private_network?: string;
  authorized_networks?: GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationAuthorizedNetworks[];
  psc_config?: GoogleSqlDatabaseInstanceArgsSettingsIpConfigurationPscConfig[];
}

export interface GoogleSqlDatabaseInstanceArgsSettingsLocationPreference {
  follow_gae_application?: string;
  secondary_zone?: string;
  zone?: string;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsMaintenanceWindow {
  day?: number;
  hour?: number;
  update_track?: string;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsPasswordValidationPolicy {
  complexity?: string;
  disallow_username_substring?: boolean;
  enable_password_policy: boolean;
  min_length?: number;
  password_change_interval?: string;
  reuse_interval?: number;
}

export interface GoogleSqlDatabaseInstanceArgsSettingsSqlServerAuditConfig {
  bucket?: string;
  retention_interval?: string;
  upload_interval?: string;
}

export interface GoogleSqlDatabaseInstanceArgsSettings {
  activation_policy?: string;
  availability_type?: string;
  collation?: string;
  deletion_protection_enabled?: boolean;
  disk_autoresize?: boolean;
  disk_autoresize_limit?: number;
  disk_type?: string;
  enable_dataplex_integration?: boolean;
  enable_google_ml_integration?: boolean;
  pricing_plan?: string;
  tier: string;
  time_zone?: string;
  active_directory_config?: GoogleSqlDatabaseInstanceArgsSettingsActiveDirectoryConfig;
  advanced_machine_features?: GoogleSqlDatabaseInstanceArgsSettingsAdvancedMachineFeatures;
  backup_configuration?: GoogleSqlDatabaseInstanceArgsSettingsBackupConfiguration;
  data_cache_config?: GoogleSqlDatabaseInstanceArgsSettingsDataCacheConfig;
  database_flags?: GoogleSqlDatabaseInstanceArgsSettingsDatabaseFlags[];
  deny_maintenance_period?: GoogleSqlDatabaseInstanceArgsSettingsDenyMaintenancePeriod;
  insights_config?: GoogleSqlDatabaseInstanceArgsSettingsInsightsConfig;
  ip_configuration?: GoogleSqlDatabaseInstanceArgsSettingsIpConfiguration;
  location_preference?: GoogleSqlDatabaseInstanceArgsSettingsLocationPreference;
  maintenance_window?: GoogleSqlDatabaseInstanceArgsSettingsMaintenanceWindow;
  password_validation_policy?: GoogleSqlDatabaseInstanceArgsSettingsPasswordValidationPolicy;
  sql_server_audit_config?: GoogleSqlDatabaseInstanceArgsSettingsSqlServerAuditConfig;
}

export interface GoogleSqlDatabaseInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSqlDatabaseInstanceArgs {
  database_version: string;
  deletion_protection?: boolean;
  root_password?: string;
  clone?: GoogleSqlDatabaseInstanceArgsClone;
  replica_configuration?: GoogleSqlDatabaseInstanceArgsReplicaConfiguration;
  restore_backup_context?: GoogleSqlDatabaseInstanceArgsRestoreBackupContext;
  settings?: GoogleSqlDatabaseInstanceArgsSettings;
  timeouts?: GoogleSqlDatabaseInstanceArgsTimeouts;
}

export class google_sql_database_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSqlDatabaseInstanceArgs) {
    const meta = {clone:{isBlock:true},replica_configuration:{isBlock:true},restore_backup_context:{isBlock:true},settings:{isBlock:true,active_directory_config:{isBlock:true},advanced_machine_features:{isBlock:true},backup_configuration:{isBlock:true,backup_retention_settings:{isBlock:true}},data_cache_config:{isBlock:true},database_flags:{isBlock:true},deny_maintenance_period:{isBlock:true},insights_config:{isBlock:true},ip_configuration:{isBlock:true,authorized_networks:{isBlock:true},psc_config:{isBlock:true,psc_auto_connections:{isBlock:true}}},location_preference:{isBlock:true},maintenance_window:{isBlock:true},password_validation_policy:{isBlock:true},sql_server_audit_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_sql_database_instance", resourceName);
  }

  get available_maintenance_versions(): string {
    return `${this.resourceType}.${this.resourceName}.available_maintenance_versions`;
  }

  get connection_name(): string {
    return `${this.resourceType}.${this.resourceName}.connection_name`;
  }

  get database_version(): string {
    return `${this.resourceType}.${this.resourceName}.database_version`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get encryption_key_name(): string {
    return `${this.resourceType}.${this.resourceName}.encryption_key_name`;
  }

  get first_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.first_ip_address`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get maintenance_version(): string {
    return `${this.resourceType}.${this.resourceName}.maintenance_version`;
  }

  get master_instance_name(): string {
    return `${this.resourceType}.${this.resourceName}.master_instance_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get private_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.private_ip_address`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get psc_service_attachment_link(): string {
    return `${this.resourceType}.${this.resourceName}.psc_service_attachment_link`;
  }

  get public_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.public_ip_address`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get replica_names(): string {
    return `${this.resourceType}.${this.resourceName}.replica_names`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get server_ca_cert(): string {
    return `${this.resourceType}.${this.resourceName}.server_ca_cert`;
  }

  get service_account_email_address(): string {
    return `${this.resourceType}.${this.resourceName}.service_account_email_address`;
  }
}
