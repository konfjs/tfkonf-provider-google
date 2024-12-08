import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComposerEnvironmentArgsConfigDataRetentionConfigTaskLogsRetentionConfig {
  storage_mode?: string;
}

export interface GoogleComposerEnvironmentArgsConfigDataRetentionConfig {
  task_logs_retention_config: GoogleComposerEnvironmentArgsConfigDataRetentionConfigTaskLogsRetentionConfig[];
}

export interface GoogleComposerEnvironmentArgsConfigDatabaseConfig {
  machine_type?: string;
  zone?: string;
}

export interface GoogleComposerEnvironmentArgsConfigEncryptionConfig {
  kms_key_name: string;
}

export interface GoogleComposerEnvironmentArgsConfigMaintenanceWindow {
  end_time: string;
  recurrence: string;
  start_time: string;
}

export interface GoogleComposerEnvironmentArgsConfigMasterAuthorizedNetworksConfigCidrBlocks {
  cidr_block: string;
  display_name?: string;
}

export interface GoogleComposerEnvironmentArgsConfigMasterAuthorizedNetworksConfig {
  enabled: boolean;
  cidr_blocks?: GoogleComposerEnvironmentArgsConfigMasterAuthorizedNetworksConfigCidrBlocks[];
}

export interface GoogleComposerEnvironmentArgsConfigNodeConfigIpAllocationPolicy {
  cluster_ipv4_cidr_block?: string;
  cluster_secondary_range_name?: string;
  services_ipv4_cidr_block?: string;
  services_secondary_range_name?: string;
  use_ip_aliases?: boolean;
}

export interface GoogleComposerEnvironmentArgsConfigNodeConfig {
  subnetwork?: string;
  tags?: string[];
  ip_allocation_policy?: GoogleComposerEnvironmentArgsConfigNodeConfigIpAllocationPolicy;
}

export interface GoogleComposerEnvironmentArgsConfigPrivateEnvironmentConfig {
  enable_private_endpoint?: boolean;
}

export interface GoogleComposerEnvironmentArgsConfigRecoveryConfigScheduledSnapshotsConfig {
  enabled: boolean;
  snapshot_creation_schedule?: string;
  snapshot_location?: string;
  time_zone?: string;
}

export interface GoogleComposerEnvironmentArgsConfigRecoveryConfig {
  scheduled_snapshots_config?: GoogleComposerEnvironmentArgsConfigRecoveryConfigScheduledSnapshotsConfig;
}

export interface GoogleComposerEnvironmentArgsConfigSoftwareConfigCloudDataLineageIntegration {
  enabled: boolean;
}

export interface GoogleComposerEnvironmentArgsConfigSoftwareConfig {
  airflow_config_overrides?: { [key: string]: string };
  env_variables?: { [key: string]: string };
  pypi_packages?: { [key: string]: string };
  cloud_data_lineage_integration?: GoogleComposerEnvironmentArgsConfigSoftwareConfigCloudDataLineageIntegration;
}

export interface GoogleComposerEnvironmentArgsConfigWebServerConfig {
  machine_type: string;
}

export interface GoogleComposerEnvironmentArgsConfigWebServerNetworkAccessControlAllowedIpRange {
  description?: string;
  value: string;
}

export interface GoogleComposerEnvironmentArgsConfigWebServerNetworkAccessControl {
  allowed_ip_range?: GoogleComposerEnvironmentArgsConfigWebServerNetworkAccessControlAllowedIpRange[];
}

export interface GoogleComposerEnvironmentArgsConfigWorkloadsConfigScheduler {
}

export interface GoogleComposerEnvironmentArgsConfigWorkloadsConfigTriggerer {
  count: number;
  cpu: number;
  memory_gb: number;
}

export interface GoogleComposerEnvironmentArgsConfigWorkloadsConfigWebServer {
}

export interface GoogleComposerEnvironmentArgsConfigWorkloadsConfigWorker {
}

export interface GoogleComposerEnvironmentArgsConfigWorkloadsConfig {
  scheduler?: GoogleComposerEnvironmentArgsConfigWorkloadsConfigScheduler;
  triggerer?: GoogleComposerEnvironmentArgsConfigWorkloadsConfigTriggerer;
  web_server?: GoogleComposerEnvironmentArgsConfigWorkloadsConfigWebServer;
  worker?: GoogleComposerEnvironmentArgsConfigWorkloadsConfigWorker;
}

export interface GoogleComposerEnvironmentArgsConfig {
  data_retention_config?: GoogleComposerEnvironmentArgsConfigDataRetentionConfig;
  database_config?: GoogleComposerEnvironmentArgsConfigDatabaseConfig;
  encryption_config?: GoogleComposerEnvironmentArgsConfigEncryptionConfig;
  maintenance_window?: GoogleComposerEnvironmentArgsConfigMaintenanceWindow;
  master_authorized_networks_config?: GoogleComposerEnvironmentArgsConfigMasterAuthorizedNetworksConfig;
  node_config?: GoogleComposerEnvironmentArgsConfigNodeConfig;
  private_environment_config?: GoogleComposerEnvironmentArgsConfigPrivateEnvironmentConfig;
  recovery_config?: GoogleComposerEnvironmentArgsConfigRecoveryConfig;
  software_config?: GoogleComposerEnvironmentArgsConfigSoftwareConfig;
  web_server_config?: GoogleComposerEnvironmentArgsConfigWebServerConfig;
  web_server_network_access_control?: GoogleComposerEnvironmentArgsConfigWebServerNetworkAccessControl;
  workloads_config?: GoogleComposerEnvironmentArgsConfigWorkloadsConfig;
}

export interface GoogleComposerEnvironmentArgsStorageConfig {
  bucket: string;
}

export interface GoogleComposerEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComposerEnvironmentArgs {
  labels?: { [key: string]: string };
  name: string;
  config?: GoogleComposerEnvironmentArgsConfig;
  storage_config?: GoogleComposerEnvironmentArgsStorageConfig;
  timeouts?: GoogleComposerEnvironmentArgsTimeouts;
}

export class google_composer_environment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComposerEnvironmentArgs) {
    const meta = {config:{isBlock:true,data_retention_config:{isBlock:true,task_logs_retention_config:{isBlock:true}},database_config:{isBlock:true},encryption_config:{isBlock:true},maintenance_window:{isBlock:true},master_authorized_networks_config:{isBlock:true,cidr_blocks:{isBlock:true}},node_config:{isBlock:true,ip_allocation_policy:{isBlock:true}},private_environment_config:{isBlock:true},recovery_config:{isBlock:true,scheduled_snapshots_config:{isBlock:true}},software_config:{isBlock:true,cloud_data_lineage_integration:{isBlock:true}},web_server_config:{isBlock:true},web_server_network_access_control:{isBlock:true,allowed_ip_range:{isBlock:true}},workloads_config:{isBlock:true,scheduler:{isBlock:true},triggerer:{isBlock:true},web_server:{isBlock:true},worker:{isBlock:true}}},storage_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_composer_environment", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
