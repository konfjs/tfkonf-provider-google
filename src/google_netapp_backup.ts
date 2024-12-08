import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetappBackupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetappBackupArgs {
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  source_snapshot?: string;
  source_volume?: string;
  vault_name: string;
  timeouts?: GoogleNetappBackupArgsTimeouts;
}

export class google_netapp_backup extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetappBackupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_netapp_backup", resourceName);
  }

  get backup_type(): string {
    return `${this.resourceType}.${this.resourceName}.backup_type`;
  }

  get chain_storage_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.chain_storage_bytes`;
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

  get vault_name(): string {
    return `${this.resourceType}.${this.resourceName}.vault_name`;
  }

  get volume_usage_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.volume_usage_bytes`;
  }
}
