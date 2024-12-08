import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetappBackupPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetappBackupPolicyArgs {
  daily_backup_limit: number;
  description?: string;
  enabled?: boolean;
  labels?: { [key: string]: string };
  location: string;
  monthly_backup_limit: number;
  name: string;
  weekly_backup_limit: number;
  timeouts?: GoogleNetappBackupPolicyArgsTimeouts;
}

export class google_netapp_backup_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetappBackupPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_netapp_backup_policy", resourceName);
  }

  get assigned_volume_count(): string {
    return `${this.resourceType}.${this.resourceName}.assigned_volume_count`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get daily_backup_limit(): string {
    return `${this.resourceType}.${this.resourceName}.daily_backup_limit`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get monthly_backup_limit(): string {
    return `${this.resourceType}.${this.resourceName}.monthly_backup_limit`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get weekly_backup_limit(): string {
    return `${this.resourceType}.${this.resourceName}.weekly_backup_limit`;
  }
}
