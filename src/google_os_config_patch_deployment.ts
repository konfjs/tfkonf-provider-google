import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOsConfigPatchDeploymentArgsInstanceFilterGroupLabels {
  labels: { [key: string]: string };
}

export interface GoogleOsConfigPatchDeploymentArgsInstanceFilter {
  all?: boolean;
  instance_name_prefixes?: string[];
  instances?: string[];
  zones?: string[];
  group_labels?: GoogleOsConfigPatchDeploymentArgsInstanceFilterGroupLabels[];
}

export interface GoogleOsConfigPatchDeploymentArgsOneTimeSchedule {
  execute_time: string;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigApt {
  excludes?: string[];
  exclusive_packages?: string[];
  type?: string;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigGoo {
  enabled: boolean;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepLinuxExecStepConfigGcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepLinuxExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object?: GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepLinuxExecStepConfigGcsObject;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepWindowsExecStepConfigGcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepWindowsExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object?: GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepWindowsExecStepConfigGcsObject;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPostStep {
  linux_exec_step_config?: GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepLinuxExecStepConfig;
  windows_exec_step_config?: GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepWindowsExecStepConfig;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepLinuxExecStepConfigGcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepLinuxExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object?: GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepLinuxExecStepConfigGcsObject;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepWindowsExecStepConfigGcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepWindowsExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object?: GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepWindowsExecStepConfigGcsObject;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPreStep {
  linux_exec_step_config?: GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepLinuxExecStepConfig;
  windows_exec_step_config?: GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepWindowsExecStepConfig;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigWindowsUpdate {
  classifications?: string[];
  excludes?: string[];
  exclusive_patches?: string[];
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigYum {
  excludes?: string[];
  exclusive_packages?: string[];
  minimal?: boolean;
  security?: boolean;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfigZypper {
  categories?: string[];
  excludes?: string[];
  exclusive_patches?: string[];
  severities?: string[];
  with_optional?: boolean;
  with_update?: boolean;
}

export interface GoogleOsConfigPatchDeploymentArgsPatchConfig {
  mig_instances_allowed?: boolean;
  reboot_config?: string;
  apt?: GoogleOsConfigPatchDeploymentArgsPatchConfigApt;
  goo?: GoogleOsConfigPatchDeploymentArgsPatchConfigGoo;
  post_step?: GoogleOsConfigPatchDeploymentArgsPatchConfigPostStep;
  pre_step?: GoogleOsConfigPatchDeploymentArgsPatchConfigPreStep;
  windows_update?: GoogleOsConfigPatchDeploymentArgsPatchConfigWindowsUpdate;
  yum?: GoogleOsConfigPatchDeploymentArgsPatchConfigYum;
  zypper?: GoogleOsConfigPatchDeploymentArgsPatchConfigZypper;
}

export interface GoogleOsConfigPatchDeploymentArgsRecurringScheduleMonthlyWeekDayOfMonth {
  day_of_week: string;
  day_offset?: number;
  week_ordinal: number;
}

export interface GoogleOsConfigPatchDeploymentArgsRecurringScheduleMonthly {
  month_day?: number;
  week_day_of_month?: GoogleOsConfigPatchDeploymentArgsRecurringScheduleMonthlyWeekDayOfMonth;
}

export interface GoogleOsConfigPatchDeploymentArgsRecurringScheduleTimeOfDay {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}

export interface GoogleOsConfigPatchDeploymentArgsRecurringScheduleTimeZone {
  id: string;
  version?: string;
}

export interface GoogleOsConfigPatchDeploymentArgsRecurringScheduleWeekly {
  day_of_week: string;
}

export interface GoogleOsConfigPatchDeploymentArgsRecurringSchedule {
  end_time?: string;
  start_time?: string;
  monthly?: GoogleOsConfigPatchDeploymentArgsRecurringScheduleMonthly;
  time_of_day: GoogleOsConfigPatchDeploymentArgsRecurringScheduleTimeOfDay;
  time_zone: GoogleOsConfigPatchDeploymentArgsRecurringScheduleTimeZone;
  weekly?: GoogleOsConfigPatchDeploymentArgsRecurringScheduleWeekly;
}

export interface GoogleOsConfigPatchDeploymentArgsRolloutDisruptionBudget {
  fixed?: number;
  percentage?: number;
}

export interface GoogleOsConfigPatchDeploymentArgsRollout {
  mode: string;
  disruption_budget: GoogleOsConfigPatchDeploymentArgsRolloutDisruptionBudget;
}

export interface GoogleOsConfigPatchDeploymentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleOsConfigPatchDeploymentArgs {
  description?: string;
  duration?: string;
  patch_deployment_id: string;
  instance_filter: GoogleOsConfigPatchDeploymentArgsInstanceFilter;
  one_time_schedule?: GoogleOsConfigPatchDeploymentArgsOneTimeSchedule;
  patch_config?: GoogleOsConfigPatchDeploymentArgsPatchConfig;
  recurring_schedule?: GoogleOsConfigPatchDeploymentArgsRecurringSchedule;
  rollout?: GoogleOsConfigPatchDeploymentArgsRollout;
  timeouts?: GoogleOsConfigPatchDeploymentArgsTimeouts;
}

export class google_os_config_patch_deployment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleOsConfigPatchDeploymentArgs) {
    const meta = {instance_filter:{isBlock:true,group_labels:{isBlock:true}},one_time_schedule:{isBlock:true},patch_config:{isBlock:true,apt:{isBlock:true},goo:{isBlock:true},post_step:{isBlock:true,linux_exec_step_config:{isBlock:true,gcs_object:{isBlock:true}},windows_exec_step_config:{isBlock:true,gcs_object:{isBlock:true}}},pre_step:{isBlock:true,linux_exec_step_config:{isBlock:true,gcs_object:{isBlock:true}},windows_exec_step_config:{isBlock:true,gcs_object:{isBlock:true}}},windows_update:{isBlock:true},yum:{isBlock:true},zypper:{isBlock:true}},recurring_schedule:{isBlock:true,monthly:{isBlock:true,week_day_of_month:{isBlock:true}},time_of_day:{isBlock:true},time_zone:{isBlock:true},weekly:{isBlock:true}},rollout:{isBlock:true,disruption_budget:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_os_config_patch_deployment", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_execute_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_execute_time`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get patch_deployment_id(): string {
    return `${this.resourceType}.${this.resourceName}.patch_deployment_id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
