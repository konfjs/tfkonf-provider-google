import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirestoreBackupScheduleArgsDailyRecurrence {
}

export interface GoogleFirestoreBackupScheduleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirestoreBackupScheduleArgsWeeklyRecurrence {
  day?: string;
}

export interface GoogleFirestoreBackupScheduleArgs {
  database?: string;
  retention: string;
  daily_recurrence?: GoogleFirestoreBackupScheduleArgsDailyRecurrence;
  timeouts?: GoogleFirestoreBackupScheduleArgsTimeouts;
  weekly_recurrence?: GoogleFirestoreBackupScheduleArgsWeeklyRecurrence;
}

export class google_firestore_backup_schedule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleFirestoreBackupScheduleArgs) {
    const meta = {daily_recurrence:{isBlock:true},timeouts:{isBlock:true},weekly_recurrence:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firestore_backup_schedule", resourceName);
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

  get retention(): string {
    return `${this.resourceType}.${this.resourceName}.retention`;
  }
}
