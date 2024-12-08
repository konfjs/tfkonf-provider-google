import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeAttachedDiskArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeAttachedDiskArgs {
  disk: string;
  instance: string;
  interface?: string;
  mode?: string;
  timeouts?: GoogleComputeAttachedDiskArgsTimeouts;
}

export class google_compute_attached_disk extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeAttachedDiskArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_attached_disk", resourceName);
  }

  get device_name(): string {
    return `${this.resourceType}.${this.resourceName}.device_name`;
  }

  get disk(): string {
    return `${this.resourceType}.${this.resourceName}.disk`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
