import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeDiskArgsAsyncPrimaryDisk {
  disk: string;
}

export interface GoogleComputeDiskArgsDiskEncryptionKey {
  kms_key_self_link?: string;
  kms_key_service_account?: string;
  raw_key?: string;
  rsa_encrypted_key?: string;
}

export interface GoogleComputeDiskArgsGuestOsFeatures {
  type: string;
}

export interface GoogleComputeDiskArgsSourceImageEncryptionKey {
  kms_key_self_link?: string;
  kms_key_service_account?: string;
  raw_key?: string;
}

export interface GoogleComputeDiskArgsSourceSnapshotEncryptionKey {
  kms_key_self_link?: string;
  kms_key_service_account?: string;
  raw_key?: string;
}

export interface GoogleComputeDiskArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeDiskArgs {
  description?: string;
  image?: string;
  labels?: { [key: string]: string };
  name: string;
  snapshot?: string;
  source_disk?: string;
  storage_pool?: string;
  type?: string;
  async_primary_disk?: GoogleComputeDiskArgsAsyncPrimaryDisk;
  disk_encryption_key?: GoogleComputeDiskArgsDiskEncryptionKey;
  guest_os_features?: GoogleComputeDiskArgsGuestOsFeatures[];
  source_image_encryption_key?: GoogleComputeDiskArgsSourceImageEncryptionKey;
  source_snapshot_encryption_key?: GoogleComputeDiskArgsSourceSnapshotEncryptionKey;
  timeouts?: GoogleComputeDiskArgsTimeouts;
}

export class google_compute_disk extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeDiskArgs) {
    const meta = {async_primary_disk:{isBlock:true},disk_encryption_key:{isBlock:true},guest_os_features:{isBlock:true},source_image_encryption_key:{isBlock:true},source_snapshot_encryption_key:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_disk", resourceName);
  }

  get access_mode(): string {
    return `${this.resourceType}.${this.resourceName}.access_mode`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get disk_id(): string {
    return `${this.resourceType}.${this.resourceName}.disk_id`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get enable_confidential_compute(): string {
    return `${this.resourceType}.${this.resourceName}.enable_confidential_compute`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get label_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.label_fingerprint`;
  }

  get last_attach_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.last_attach_timestamp`;
  }

  get last_detach_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.last_detach_timestamp`;
  }

  get licenses(): string {
    return `${this.resourceType}.${this.resourceName}.licenses`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get physical_block_size_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.physical_block_size_bytes`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get provisioned_iops(): string {
    return `${this.resourceType}.${this.resourceName}.provisioned_iops`;
  }

  get provisioned_throughput(): string {
    return `${this.resourceType}.${this.resourceName}.provisioned_throughput`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get size(): string {
    return `${this.resourceType}.${this.resourceName}.size`;
  }

  get source_disk_id(): string {
    return `${this.resourceType}.${this.resourceName}.source_disk_id`;
  }

  get source_image_id(): string {
    return `${this.resourceType}.${this.resourceName}.source_image_id`;
  }

  get source_snapshot_id(): string {
    return `${this.resourceType}.${this.resourceName}.source_snapshot_id`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get users(): string {
    return `${this.resourceType}.${this.resourceName}.users`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
