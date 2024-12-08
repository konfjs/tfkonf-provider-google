import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeBackupBackupPlanIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleGkeBackupBackupPlanIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition?: GoogleGkeBackupBackupPlanIamMemberArgsCondition;
}

export class google_gke_backup_backup_plan_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleGkeBackupBackupPlanIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gke_backup_backup_plan_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
