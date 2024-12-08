import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOracleDatabaseCloudVmClusterArgsPropertiesDiagnosticsDataCollectionOptions {
  diagnostics_events_enabled?: boolean;
  health_monitoring_enabled?: boolean;
  incident_logs_enabled?: boolean;
}

export interface GoogleOracleDatabaseCloudVmClusterArgsPropertiesTimeZone {
}

export interface GoogleOracleDatabaseCloudVmClusterArgsProperties {
  cpu_core_count: number;
  gi_version?: string;
  hostname_prefix?: string;
  license_type: string;
  local_backup_enabled?: boolean;
  ssh_public_keys?: string[];
  diagnostics_data_collection_options?: GoogleOracleDatabaseCloudVmClusterArgsPropertiesDiagnosticsDataCollectionOptions;
  time_zone?: GoogleOracleDatabaseCloudVmClusterArgsPropertiesTimeZone;
}

export interface GoogleOracleDatabaseCloudVmClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleOracleDatabaseCloudVmClusterArgs {
  backup_subnet_cidr: string;
  cidr: string;
  cloud_vm_cluster_id: string;
  display_name?: string;
  exadata_infrastructure: string;
  labels?: { [key: string]: string };
  location: string;
  network: string;
  properties?: GoogleOracleDatabaseCloudVmClusterArgsProperties;
  timeouts?: GoogleOracleDatabaseCloudVmClusterArgsTimeouts;
}

export class google_oracle_database_cloud_vm_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleOracleDatabaseCloudVmClusterArgs) {
    const meta = {properties:{isBlock:true,diagnostics_data_collection_options:{isBlock:true},time_zone:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_oracle_database_cloud_vm_cluster", resourceName);
  }

  get backup_subnet_cidr(): string {
    return `${this.resourceType}.${this.resourceName}.backup_subnet_cidr`;
  }

  get cidr(): string {
    return `${this.resourceType}.${this.resourceName}.cidr`;
  }

  get cloud_vm_cluster_id(): string {
    return `${this.resourceType}.${this.resourceName}.cloud_vm_cluster_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get exadata_infrastructure(): string {
    return `${this.resourceType}.${this.resourceName}.exadata_infrastructure`;
  }

  get gcp_oracle_zone(): string {
    return `${this.resourceType}.${this.resourceName}.gcp_oracle_zone`;
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
