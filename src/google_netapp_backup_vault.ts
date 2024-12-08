import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetappBackupVaultArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetappBackupVaultArgs {
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  timeouts?: GoogleNetappBackupVaultArgsTimeouts;
}

export class google_netapp_backup_vault extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetappBackupVaultArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_netapp_backup_vault", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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
}
