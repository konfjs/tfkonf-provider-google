import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeSnapshotArgs {
  filter?: string;
  most_recent?: boolean;
  name?: string;
  project?: string;
}

export class data_google_compute_snapshot extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeSnapshotArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_snapshot", resourceName);
  }

  get chain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.chain_name`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get disk_size_gb(): string {
    return `data.${this.resourceType}.${this.resourceName}.disk_size_gb`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get label_fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.label_fingerprint`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get licenses(): string {
    return `data.${this.resourceType}.${this.resourceName}.licenses`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get snapshot_encryption_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_encryption_key`;
  }

  get snapshot_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_id`;
  }

  get source_disk(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_disk`;
  }

  get source_disk_encryption_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_disk_encryption_key`;
  }

  get storage_bytes(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_bytes`;
  }

  get storage_locations(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_locations`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone`;
  }
}
