import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetappVolumeSnapshotArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetappVolumeSnapshotArgs {
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  volume_name: string;
  timeouts?: GoogleNetappVolumeSnapshotArgsTimeouts;
}

export class google_netapp_volume_snapshot extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetappVolumeSnapshotArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_netapp_volume_snapshot", resourceName);
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get used_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.used_bytes`;
  }

  get volume_name(): string {
    return `${this.resourceType}.${this.resourceName}.volume_name`;
  }
}
