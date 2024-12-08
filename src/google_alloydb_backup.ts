import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAlloydbBackupArgsEncryptionConfig {
  kms_key_name?: string;
}

export interface GoogleAlloydbBackupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAlloydbBackupArgs {
  annotations?: { [key: string]: string };
  backup_id: string;
  cluster_name: string;
  description?: string;
  display_name?: string;
  labels?: { [key: string]: string };
  location: string;
  encryption_config?: GoogleAlloydbBackupArgsEncryptionConfig;
  timeouts?: GoogleAlloydbBackupArgsTimeouts;
}

export class google_alloydb_backup extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAlloydbBackupArgs) {
    const meta = {encryption_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_alloydb_backup", resourceName);
  }

  get backup_id(): string {
    return `${this.resourceType}.${this.resourceName}.backup_id`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get cluster_uid(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_uid`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get delete_time(): string {
    return `${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get encryption_info(): string {
    return `${this.resourceType}.${this.resourceName}.encryption_info`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get expiry_quantity(): string {
    return `${this.resourceType}.${this.resourceName}.expiry_quantity`;
  }

  get expiry_time(): string {
    return `${this.resourceType}.${this.resourceName}.expiry_time`;
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

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get size_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.size_bytes`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
