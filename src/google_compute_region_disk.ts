import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionDiskArgsAsyncPrimaryDisk {
  disk: string;
}

export interface GoogleComputeRegionDiskArgsDiskEncryptionKey {
  kms_key_name?: string;
  raw_key?: string;
}

export interface GoogleComputeRegionDiskArgsGuestOsFeatures {
  type: string;
}

export interface GoogleComputeRegionDiskArgsSourceSnapshotEncryptionKey {
  raw_key?: string;
}

export interface GoogleComputeRegionDiskArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionDiskArgs {
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  replica_zones: string[];
  snapshot?: string;
  source_disk?: string;
  type?: string;
  async_primary_disk?: GoogleComputeRegionDiskArgsAsyncPrimaryDisk;
  disk_encryption_key?: GoogleComputeRegionDiskArgsDiskEncryptionKey;
  guest_os_features?: GoogleComputeRegionDiskArgsGuestOsFeatures[];
  source_snapshot_encryption_key?: GoogleComputeRegionDiskArgsSourceSnapshotEncryptionKey;
  timeouts?: GoogleComputeRegionDiskArgsTimeouts;
}

export class google_compute_region_disk extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionDiskArgs) {
    const meta = {async_primary_disk:{isBlock:true},disk_encryption_key:{isBlock:true},guest_os_features:{isBlock:true},source_snapshot_encryption_key:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_disk", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get replica_zones(): string {
    return `${this.resourceType}.${this.resourceName}.replica_zones`;
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

  get source_snapshot_id(): string {
    return `${this.resourceType}.${this.resourceName}.source_snapshot_id`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get users(): string {
    return `${this.resourceType}.${this.resourceName}.users`;
  }
}
