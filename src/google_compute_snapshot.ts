import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSnapshotArgsSnapshotEncryptionKey {
  kms_key_self_link?: string;
  kms_key_service_account?: string;
  raw_key?: string;
}

export interface GoogleComputeSnapshotArgsSourceDiskEncryptionKey {
  kms_key_service_account?: string;
  raw_key?: string;
}

export interface GoogleComputeSnapshotArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeSnapshotArgs {
  chain_name?: string;
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  source_disk: string;
  snapshot_encryption_key?: GoogleComputeSnapshotArgsSnapshotEncryptionKey;
  source_disk_encryption_key?: GoogleComputeSnapshotArgsSourceDiskEncryptionKey;
  timeouts?: GoogleComputeSnapshotArgsTimeouts;
}

export class google_compute_snapshot extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeSnapshotArgs) {
    const meta = {snapshot_encryption_key:{isBlock:true},source_disk_encryption_key:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_snapshot", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get disk_size_gb(): string {
    return `${this.resourceType}.${this.resourceName}.disk_size_gb`;
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

  get licenses(): string {
    return `${this.resourceType}.${this.resourceName}.licenses`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get snapshot_id(): string {
    return `${this.resourceType}.${this.resourceName}.snapshot_id`;
  }

  get source_disk(): string {
    return `${this.resourceType}.${this.resourceName}.source_disk`;
  }

  get storage_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.storage_bytes`;
  }

  get storage_locations(): string {
    return `${this.resourceType}.${this.resourceName}.storage_locations`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
