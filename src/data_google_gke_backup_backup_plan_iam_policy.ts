import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleGkeBackupBackupPlanIamPolicyArgs {
  name: string;
}

export class data_google_gke_backup_backup_plan_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleGkeBackupBackupPlanIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_gke_backup_backup_plan_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
