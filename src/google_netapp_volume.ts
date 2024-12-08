import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetappVolumeArgsBackupConfig {
  backup_policies?: string[];
  backup_vault?: string;
  scheduled_backup_enabled?: boolean;
}

export interface GoogleNetappVolumeArgsExportPolicyRules {
  access_type?: string;
  allowed_clients?: string;
  has_root_access?: string;
  kerberos5_read_only?: boolean;
  kerberos5_read_write?: boolean;
  kerberos5i_read_only?: boolean;
  kerberos5i_read_write?: boolean;
  kerberos5p_read_only?: boolean;
  kerberos5p_read_write?: boolean;
  nfsv3?: boolean;
  nfsv4?: boolean;
}

export interface GoogleNetappVolumeArgsExportPolicy {
  rules: GoogleNetappVolumeArgsExportPolicyRules[];
}

export interface GoogleNetappVolumeArgsRestoreParameters {
  source_backup?: string;
  source_snapshot?: string;
}

export interface GoogleNetappVolumeArgsSnapshotPolicyDailySchedule {
  hour?: number;
  minute?: number;
  snapshots_to_keep: number;
}

export interface GoogleNetappVolumeArgsSnapshotPolicyHourlySchedule {
  minute?: number;
  snapshots_to_keep: number;
}

export interface GoogleNetappVolumeArgsSnapshotPolicyMonthlySchedule {
  days_of_month?: string;
  hour?: number;
  minute?: number;
  snapshots_to_keep: number;
}

export interface GoogleNetappVolumeArgsSnapshotPolicyWeeklySchedule {
  day?: string;
  hour?: number;
  minute?: number;
  snapshots_to_keep: number;
}

export interface GoogleNetappVolumeArgsSnapshotPolicy {
  enabled?: boolean;
  daily_schedule?: GoogleNetappVolumeArgsSnapshotPolicyDailySchedule;
  hourly_schedule?: GoogleNetappVolumeArgsSnapshotPolicyHourlySchedule;
  monthly_schedule?: GoogleNetappVolumeArgsSnapshotPolicyMonthlySchedule;
  weekly_schedule?: GoogleNetappVolumeArgsSnapshotPolicyWeeklySchedule;
}

export interface GoogleNetappVolumeArgsTieringPolicy {
  cooling_threshold_days?: number;
  tier_action?: string;
}

export interface GoogleNetappVolumeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetappVolumeArgs {
  capacity_gib: string;
  deletion_policy?: string;
  description?: string;
  kerberos_enabled?: boolean;
  labels?: { [key: string]: string };
  large_capacity?: boolean;
  location: string;
  multiple_endpoints?: boolean;
  name: string;
  protocols: string[];
  restricted_actions?: string[];
  share_name: string;
  snapshot_directory?: boolean;
  storage_pool: string;
  backup_config?: GoogleNetappVolumeArgsBackupConfig;
  export_policy?: GoogleNetappVolumeArgsExportPolicy;
  restore_parameters?: GoogleNetappVolumeArgsRestoreParameters;
  snapshot_policy?: GoogleNetappVolumeArgsSnapshotPolicy;
  tiering_policy?: GoogleNetappVolumeArgsTieringPolicy;
  timeouts?: GoogleNetappVolumeArgsTimeouts;
}

export class google_netapp_volume extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetappVolumeArgs) {
    const meta = {backup_config:{isBlock:true},export_policy:{isBlock:true,rules:{isBlock:true}},restore_parameters:{isBlock:true},snapshot_policy:{isBlock:true,daily_schedule:{isBlock:true},hourly_schedule:{isBlock:true},monthly_schedule:{isBlock:true},weekly_schedule:{isBlock:true}},tiering_policy:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_netapp_volume", resourceName);
  }

  get active_directory(): string {
    return `${this.resourceType}.${this.resourceName}.active_directory`;
  }

  get capacity_gib(): string {
    return `${this.resourceType}.${this.resourceName}.capacity_gib`;
  }

  get cold_tier_size_gib(): string {
    return `${this.resourceType}.${this.resourceName}.cold_tier_size_gib`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get encryption_type(): string {
    return `${this.resourceType}.${this.resourceName}.encryption_type`;
  }

  get has_replication(): string {
    return `${this.resourceType}.${this.resourceName}.has_replication`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_config(): string {
    return `${this.resourceType}.${this.resourceName}.kms_config`;
  }

  get ldap_enabled(): string {
    return `${this.resourceType}.${this.resourceName}.ldap_enabled`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get mount_options(): string {
    return `${this.resourceType}.${this.resourceName}.mount_options`;
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

  get protocols(): string {
    return `${this.resourceType}.${this.resourceName}.protocols`;
  }

  get psa_range(): string {
    return `${this.resourceType}.${this.resourceName}.psa_range`;
  }

  get replica_zone(): string {
    return `${this.resourceType}.${this.resourceName}.replica_zone`;
  }

  get security_style(): string {
    return `${this.resourceType}.${this.resourceName}.security_style`;
  }

  get service_level(): string {
    return `${this.resourceType}.${this.resourceName}.service_level`;
  }

  get share_name(): string {
    return `${this.resourceType}.${this.resourceName}.share_name`;
  }

  get smb_settings(): string {
    return `${this.resourceType}.${this.resourceName}.smb_settings`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_details(): string {
    return `${this.resourceType}.${this.resourceName}.state_details`;
  }

  get storage_pool(): string {
    return `${this.resourceType}.${this.resourceName}.storage_pool`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get unix_permissions(): string {
    return `${this.resourceType}.${this.resourceName}.unix_permissions`;
  }

  get used_gib(): string {
    return `${this.resourceType}.${this.resourceName}.used_gib`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
