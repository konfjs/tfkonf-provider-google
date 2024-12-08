import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeDiskResourcePolicyAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeDiskResourcePolicyAttachmentArgs {
  disk: string;
  name: string;
  timeouts?: GoogleComputeDiskResourcePolicyAttachmentArgsTimeouts;
}

export class google_compute_disk_resource_policy_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeDiskResourcePolicyAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_disk_resource_policy_attachment", resourceName);
  }

  get disk(): string {
    return `${this.resourceType}.${this.resourceName}.disk`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
