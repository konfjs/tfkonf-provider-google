import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeBackupBackupPlanArgsBackupConfigEncryptionKey {
  gcp_kms_encryption_key: string;
}

export interface GoogleGkeBackupBackupPlanArgsBackupConfigSelectedApplicationsNamespacedNames {
  name: string;
  namespace: string;
}

export interface GoogleGkeBackupBackupPlanArgsBackupConfigSelectedApplications {
  namespaced_names: GoogleGkeBackupBackupPlanArgsBackupConfigSelectedApplicationsNamespacedNames[];
}

export interface GoogleGkeBackupBackupPlanArgsBackupConfigSelectedNamespaces {
  namespaces: string[];
}

export interface GoogleGkeBackupBackupPlanArgsBackupConfig {
  all_namespaces?: boolean;
  permissive_mode?: boolean;
  encryption_key?: GoogleGkeBackupBackupPlanArgsBackupConfigEncryptionKey;
  selected_applications?: GoogleGkeBackupBackupPlanArgsBackupConfigSelectedApplications;
  selected_namespaces?: GoogleGkeBackupBackupPlanArgsBackupConfigSelectedNamespaces;
}

export interface GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsDaysOfWeek {
  days_of_week?: string[];
}

export interface GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate {
  day?: number;
  month?: number;
  year?: number;
}

export interface GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsStartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}

export interface GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindows {
  daily?: boolean;
  duration: string;
  days_of_week?: GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsDaysOfWeek;
  single_occurrence_date?: GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate;
  start_time: GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindowsStartTime;
}

export interface GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfig {
  target_rpo_minutes: number;
  exclusion_windows?: GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfigExclusionWindows[];
}

export interface GoogleGkeBackupBackupPlanArgsBackupSchedule {
  cron_schedule?: string;
  rpo_config?: GoogleGkeBackupBackupPlanArgsBackupScheduleRpoConfig;
}

export interface GoogleGkeBackupBackupPlanArgsRetentionPolicy {
}

export interface GoogleGkeBackupBackupPlanArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeBackupBackupPlanArgs {
  cluster: string;
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  backup_config?: GoogleGkeBackupBackupPlanArgsBackupConfig;
  backup_schedule?: GoogleGkeBackupBackupPlanArgsBackupSchedule;
  retention_policy?: GoogleGkeBackupBackupPlanArgsRetentionPolicy;
  timeouts?: GoogleGkeBackupBackupPlanArgsTimeouts;
}

export class google_gke_backup_backup_plan extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleGkeBackupBackupPlanArgs) {
    const meta = {backup_config:{isBlock:true,encryption_key:{isBlock:true},selected_applications:{isBlock:true,namespaced_names:{isBlock:true}},selected_namespaces:{isBlock:true}},backup_schedule:{isBlock:true,rpo_config:{isBlock:true,exclusion_windows:{isBlock:true,days_of_week:{isBlock:true},single_occurrence_date:{isBlock:true},start_time:{isBlock:true}}}},retention_policy:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gke_backup_backup_plan", resourceName);
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get deactivated(): string {
    return `${this.resourceType}.${this.resourceName}.deactivated`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get protected_pod_count(): string {
    return `${this.resourceType}.${this.resourceName}.protected_pod_count`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_reason(): string {
    return `${this.resourceType}.${this.resourceName}.state_reason`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }
}
