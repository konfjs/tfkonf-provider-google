import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeImageArgs {
  filter?: string;
  most_recent?: boolean;
}

export class data_google_compute_image extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeImageArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_image", resourceName);
  }

  get archive_size_bytes(): string {
    return `data.${this.resourceType}.${this.resourceName}.archive_size_bytes`;
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

  get family(): string {
    return `data.${this.resourceType}.${this.resourceName}.family`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_encryption_key_sha256(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_encryption_key_sha256`;
  }

  get image_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_id`;
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

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get source_disk(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_disk`;
  }

  get source_disk_encryption_key_sha256(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_disk_encryption_key_sha256`;
  }

  get source_disk_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_disk_id`;
  }

  get source_image_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_image_id`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }
}
