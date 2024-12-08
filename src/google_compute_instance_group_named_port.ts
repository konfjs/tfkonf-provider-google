import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeInstanceGroupNamedPortArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeInstanceGroupNamedPortArgs {
  group: string;
  name: string;
  port: number;
  timeouts?: GoogleComputeInstanceGroupNamedPortArgsTimeouts;
}

export class google_compute_instance_group_named_port extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeInstanceGroupNamedPortArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_instance_group_named_port", resourceName);
  }

  get group(): string {
    return `${this.resourceType}.${this.resourceName}.group`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
