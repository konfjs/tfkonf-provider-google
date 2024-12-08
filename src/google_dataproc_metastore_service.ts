import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocMetastoreServiceArgsEncryptionConfig {
  kms_key: string;
}

export interface GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigAuxiliaryVersions {
  config_overrides?: { [key: string]: string };
  key: string;
  version: string;
}

export interface GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigKerberosConfigKeytab {
  cloud_secret: string;
}

export interface GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigKerberosConfig {
  krb5_config_gcs_uri: string;
  principal: string;
  keytab: GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigKerberosConfigKeytab;
}

export interface GoogleDataprocMetastoreServiceArgsHiveMetastoreConfig {
  endpoint_protocol?: string;
  version: string;
  auxiliary_versions?: GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigAuxiliaryVersions[];
  kerberos_config?: GoogleDataprocMetastoreServiceArgsHiveMetastoreConfigKerberosConfig;
}

export interface GoogleDataprocMetastoreServiceArgsMaintenanceWindow {
  day_of_week: string;
  hour_of_day: number;
}

export interface GoogleDataprocMetastoreServiceArgsMetadataIntegrationDataCatalogConfig {
  enabled: boolean;
}

export interface GoogleDataprocMetastoreServiceArgsMetadataIntegration {
  data_catalog_config: GoogleDataprocMetastoreServiceArgsMetadataIntegrationDataCatalogConfig;
}

export interface GoogleDataprocMetastoreServiceArgsNetworkConfigConsumers {
  subnetwork: string;
}

export interface GoogleDataprocMetastoreServiceArgsNetworkConfig {
  consumers: GoogleDataprocMetastoreServiceArgsNetworkConfigConsumers[];
}

export interface GoogleDataprocMetastoreServiceArgsScalingConfig {
  instance_size?: string;
  scaling_factor?: number;
}

export interface GoogleDataprocMetastoreServiceArgsScheduledBackup {
  backup_location: string;
  cron_schedule?: string;
}

export interface GoogleDataprocMetastoreServiceArgsTelemetryConfig {
  log_format?: string;
}

export interface GoogleDataprocMetastoreServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataprocMetastoreServiceArgs {
  database_type?: string;
  deletion_protection?: boolean;
  labels?: { [key: string]: string };
  location?: string;
  release_channel?: string;
  service_id: string;
  encryption_config?: GoogleDataprocMetastoreServiceArgsEncryptionConfig;
  hive_metastore_config?: GoogleDataprocMetastoreServiceArgsHiveMetastoreConfig;
  maintenance_window?: GoogleDataprocMetastoreServiceArgsMaintenanceWindow;
  metadata_integration?: GoogleDataprocMetastoreServiceArgsMetadataIntegration;
  network_config?: GoogleDataprocMetastoreServiceArgsNetworkConfig;
  scaling_config?: GoogleDataprocMetastoreServiceArgsScalingConfig;
  scheduled_backup?: GoogleDataprocMetastoreServiceArgsScheduledBackup;
  telemetry_config?: GoogleDataprocMetastoreServiceArgsTelemetryConfig;
  timeouts?: GoogleDataprocMetastoreServiceArgsTimeouts;
}

export class google_dataproc_metastore_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataprocMetastoreServiceArgs) {
    const meta = {encryption_config:{isBlock:true},hive_metastore_config:{isBlock:true,auxiliary_versions:{isBlock:true},kerberos_config:{isBlock:true,keytab:{isBlock:true}}},maintenance_window:{isBlock:true},metadata_integration:{isBlock:true,data_catalog_config:{isBlock:true}},network_config:{isBlock:true,consumers:{isBlock:true}},scaling_config:{isBlock:true},scheduled_backup:{isBlock:true},telemetry_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_metastore_service", resourceName);
  }

  get artifact_gcs_uri(): string {
    return `${this.resourceType}.${this.resourceName}.artifact_gcs_uri`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get endpoint_uri(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_uri`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_message(): string {
    return `${this.resourceType}.${this.resourceName}.state_message`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get tier(): string {
    return `${this.resourceType}.${this.resourceName}.tier`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }
}
