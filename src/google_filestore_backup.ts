import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFilestoreBackupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFilestoreBackupArgs {
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  source_file_share: string;
  source_instance: string;
  timeouts?: GoogleFilestoreBackupArgsTimeouts;
}

export class google_filestore_backup extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleFilestoreBackupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_filestore_backup", resourceName);
  }

  get capacity_gb(): string {
    return `${this.resourceType}.${this.resourceName}.capacity_gb`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get download_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.download_bytes`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_name(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_name`;
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

  get source_file_share(): string {
    return `${this.resourceType}.${this.resourceName}.source_file_share`;
  }

  get source_instance(): string {
    return `${this.resourceType}.${this.resourceName}.source_instance`;
  }

  get source_instance_tier(): string {
    return `${this.resourceType}.${this.resourceName}.source_instance_tier`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get storage_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.storage_bytes`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
