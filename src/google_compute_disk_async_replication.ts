import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeDiskAsyncReplicationArgsSecondaryDisk {
  disk: string;
}

export interface GoogleComputeDiskAsyncReplicationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeDiskAsyncReplicationArgs {
  primary_disk: string;
  secondary_disk: GoogleComputeDiskAsyncReplicationArgsSecondaryDisk;
  timeouts?: GoogleComputeDiskAsyncReplicationArgsTimeouts;
}

export class google_compute_disk_async_replication extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeDiskAsyncReplicationArgs) {
    const meta = {secondary_disk:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_disk_async_replication", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get primary_disk(): string {
    return `${this.resourceType}.${this.resourceName}.primary_disk`;
  }
}
