import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeRegionDiskArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_compute_region_disk extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeRegionDiskArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_region_disk", resourceName);
  }

  get async_primary_disk(): string {
    return `data.${this.resourceType}.${this.resourceName}.async_primary_disk`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get disk_encryption_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.disk_encryption_key`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get guest_os_features(): string {
    return `data.${this.resourceType}.${this.resourceName}.guest_os_features`;
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

  get last_attach_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_attach_timestamp`;
  }

  get last_detach_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_detach_timestamp`;
  }

  get licenses(): string {
    return `data.${this.resourceType}.${this.resourceName}.licenses`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get physical_block_size_bytes(): string {
    return `data.${this.resourceType}.${this.resourceName}.physical_block_size_bytes`;
  }

  get replica_zones(): string {
    return `data.${this.resourceType}.${this.resourceName}.replica_zones`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get size(): string {
    return `data.${this.resourceType}.${this.resourceName}.size`;
  }

  get snapshot(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot`;
  }

  get source_disk(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_disk`;
  }

  get source_disk_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_disk_id`;
  }

  get source_snapshot_encryption_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_snapshot_encryption_key`;
  }

  get source_snapshot_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_snapshot_id`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get users(): string {
    return `data.${this.resourceType}.${this.resourceName}.users`;
  }
}
