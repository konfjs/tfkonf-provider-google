import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeImageArgsGuestOsFeatures {
  type: string;
}

export interface GoogleComputeImageArgsImageEncryptionKey {
  kms_key_self_link?: string;
  kms_key_service_account?: string;
}

export interface GoogleComputeImageArgsRawDisk {
  container_type?: string;
  sha1?: string;
  source: string;
}

export interface GoogleComputeImageArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeImageArgs {
  description?: string;
  family?: string;
  labels?: { [key: string]: string };
  name: string;
  source_disk?: string;
  source_image?: string;
  source_snapshot?: string;
  guest_os_features?: GoogleComputeImageArgsGuestOsFeatures[];
  image_encryption_key?: GoogleComputeImageArgsImageEncryptionKey;
  raw_disk?: GoogleComputeImageArgsRawDisk;
  timeouts?: GoogleComputeImageArgsTimeouts;
}

export class google_compute_image extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeImageArgs) {
    const meta = {guest_os_features:{isBlock:true},image_encryption_key:{isBlock:true},raw_disk:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_image", resourceName);
  }

  get archive_size_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.archive_size_bytes`;
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

  get storage_locations(): string {
    return `${this.resourceType}.${this.resourceName}.storage_locations`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
