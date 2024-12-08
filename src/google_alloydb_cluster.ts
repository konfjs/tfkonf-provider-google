import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAlloydbClusterArgsAutomatedBackupPolicyEncryptionConfig {
  kms_key_name?: string;
}

export interface GoogleAlloydbClusterArgsAutomatedBackupPolicyQuantityBasedRetention {
  count?: number;
}

export interface GoogleAlloydbClusterArgsAutomatedBackupPolicyTimeBasedRetention {
  retention_period?: string;
}

export interface GoogleAlloydbClusterArgsAutomatedBackupPolicyWeeklyScheduleStartTimes {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}

export interface GoogleAlloydbClusterArgsAutomatedBackupPolicyWeeklySchedule {
  days_of_week?: string[];
  start_times: GoogleAlloydbClusterArgsAutomatedBackupPolicyWeeklyScheduleStartTimes[];
}

export interface GoogleAlloydbClusterArgsAutomatedBackupPolicy {
  labels?: { [key: string]: string };
  encryption_config?: GoogleAlloydbClusterArgsAutomatedBackupPolicyEncryptionConfig;
  quantity_based_retention?: GoogleAlloydbClusterArgsAutomatedBackupPolicyQuantityBasedRetention;
  time_based_retention?: GoogleAlloydbClusterArgsAutomatedBackupPolicyTimeBasedRetention;
  weekly_schedule?: GoogleAlloydbClusterArgsAutomatedBackupPolicyWeeklySchedule;
}

export interface GoogleAlloydbClusterArgsContinuousBackupConfigEncryptionConfig {
  kms_key_name?: string;
}

export interface GoogleAlloydbClusterArgsContinuousBackupConfig {
  enabled?: boolean;
  encryption_config?: GoogleAlloydbClusterArgsContinuousBackupConfigEncryptionConfig;
}

export interface GoogleAlloydbClusterArgsEncryptionConfig {
  kms_key_name?: string;
}

export interface GoogleAlloydbClusterArgsInitialUser {
  password: string;
  user?: string;
}

export interface GoogleAlloydbClusterArgsMaintenanceUpdatePolicyMaintenanceWindowsStartTime {
  hours: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}

export interface GoogleAlloydbClusterArgsMaintenanceUpdatePolicyMaintenanceWindows {
  day: string;
  start_time: GoogleAlloydbClusterArgsMaintenanceUpdatePolicyMaintenanceWindowsStartTime;
}

export interface GoogleAlloydbClusterArgsMaintenanceUpdatePolicy {
  maintenance_windows?: GoogleAlloydbClusterArgsMaintenanceUpdatePolicyMaintenanceWindows[];
}

export interface GoogleAlloydbClusterArgsNetworkConfig {
  allocated_ip_range?: string;
  network?: string;
}

export interface GoogleAlloydbClusterArgsPscConfig {
  psc_enabled?: boolean;
}

export interface GoogleAlloydbClusterArgsRestoreBackupSource {
  backup_name: string;
}

export interface GoogleAlloydbClusterArgsRestoreContinuousBackupSource {
  cluster: string;
  point_in_time: string;
}

export interface GoogleAlloydbClusterArgsSecondaryConfig {
  primary_cluster_name: string;
}

export interface GoogleAlloydbClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAlloydbClusterArgs {
  annotations?: { [key: string]: string };
  cluster_id: string;
  cluster_type?: string;
  deletion_policy?: string;
  display_name?: string;
  etag?: string;
  labels?: { [key: string]: string };
  location: string;
  automated_backup_policy?: GoogleAlloydbClusterArgsAutomatedBackupPolicy;
  continuous_backup_config?: GoogleAlloydbClusterArgsContinuousBackupConfig;
  encryption_config?: GoogleAlloydbClusterArgsEncryptionConfig;
  initial_user?: GoogleAlloydbClusterArgsInitialUser;
  maintenance_update_policy?: GoogleAlloydbClusterArgsMaintenanceUpdatePolicy;
  network_config?: GoogleAlloydbClusterArgsNetworkConfig;
  psc_config?: GoogleAlloydbClusterArgsPscConfig;
  restore_backup_source?: GoogleAlloydbClusterArgsRestoreBackupSource;
  restore_continuous_backup_source?: GoogleAlloydbClusterArgsRestoreContinuousBackupSource;
  secondary_config?: GoogleAlloydbClusterArgsSecondaryConfig;
  timeouts?: GoogleAlloydbClusterArgsTimeouts;
}

export class google_alloydb_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAlloydbClusterArgs) {
    const meta = {automated_backup_policy:{isBlock:true,encryption_config:{isBlock:true},quantity_based_retention:{isBlock:true},time_based_retention:{isBlock:true},weekly_schedule:{isBlock:true,start_times:{isBlock:true}}},continuous_backup_config:{isBlock:true,encryption_config:{isBlock:true}},encryption_config:{isBlock:true},initial_user:{isBlock:true},maintenance_update_policy:{isBlock:true,maintenance_windows:{isBlock:true,start_time:{isBlock:true}}},network_config:{isBlock:true},psc_config:{isBlock:true},restore_backup_source:{isBlock:true},restore_continuous_backup_source:{isBlock:true},secondary_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_alloydb_cluster", resourceName);
  }

  get backup_source(): string {
    return `${this.resourceType}.${this.resourceName}.backup_source`;
  }

  get cluster_id(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get continuous_backup_info(): string {
    return `${this.resourceType}.${this.resourceName}.continuous_backup_info`;
  }

  get database_version(): string {
    return `${this.resourceType}.${this.resourceName}.database_version`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get encryption_info(): string {
    return `${this.resourceType}.${this.resourceName}.encryption_info`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get migration_source(): string {
    return `${this.resourceType}.${this.resourceName}.migration_source`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get subscription_type(): string {
    return `${this.resourceType}.${this.resourceName}.subscription_type`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get trial_metadata(): string {
    return `${this.resourceType}.${this.resourceName}.trial_metadata`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }
}
