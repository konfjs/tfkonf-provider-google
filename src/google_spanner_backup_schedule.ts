import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSpannerBackupScheduleArgsFullBackupSpec {
}

export interface GoogleSpannerBackupScheduleArgsIncrementalBackupSpec {
}

export interface GoogleSpannerBackupScheduleArgsSpecCronSpec {
  text?: string;
}

export interface GoogleSpannerBackupScheduleArgsSpec {
  cron_spec?: GoogleSpannerBackupScheduleArgsSpecCronSpec;
}

export interface GoogleSpannerBackupScheduleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSpannerBackupScheduleArgs {
  database: string;
  instance: string;
  name?: string;
  retention_duration: string;
  full_backup_spec?: GoogleSpannerBackupScheduleArgsFullBackupSpec;
  incremental_backup_spec?: GoogleSpannerBackupScheduleArgsIncrementalBackupSpec;
  spec?: GoogleSpannerBackupScheduleArgsSpec;
  timeouts?: GoogleSpannerBackupScheduleArgsTimeouts;
}

export class google_spanner_backup_schedule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSpannerBackupScheduleArgs) {
    const meta = {full_backup_spec:{isBlock:true},incremental_backup_spec:{isBlock:true},spec:{isBlock:true,cron_spec:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_spanner_backup_schedule", resourceName);
  }

  get database(): string {
    return `${this.resourceType}.${this.resourceName}.database`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get retention_duration(): string {
    return `${this.resourceType}.${this.resourceName}.retention_duration`;
  }
}
