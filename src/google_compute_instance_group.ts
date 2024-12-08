import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeInstanceGroupArgsNamedPort {
  name: string;
  port: number;
}

export interface GoogleComputeInstanceGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeInstanceGroupArgs {
  description?: string;
  name: string;
  named_port?: GoogleComputeInstanceGroupArgsNamedPort[];
  timeouts?: GoogleComputeInstanceGroupArgsTimeouts;
}

export class google_compute_instance_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeInstanceGroupArgs) {
    const meta = {named_port:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_instance_group", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instances(): string {
    return `${this.resourceType}.${this.resourceName}.instances`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get size(): string {
    return `${this.resourceType}.${this.resourceName}.size`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
