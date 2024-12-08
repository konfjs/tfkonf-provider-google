import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeResizeRequestArgsRequestedRunDuration {
  nanos?: number;
  seconds: string;
}

export interface GoogleComputeResizeRequestArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeResizeRequestArgs {
  description?: string;
  instance_group_manager: string;
  name: string;
  resize_by: number;
  zone: string;
  requested_run_duration?: GoogleComputeResizeRequestArgsRequestedRunDuration;
  timeouts?: GoogleComputeResizeRequestArgsTimeouts;
}

export class google_compute_resize_request extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeResizeRequestArgs) {
    const meta = {requested_run_duration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_resize_request", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_group_manager(): string {
    return `${this.resourceType}.${this.resourceName}.instance_group_manager`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get resize_by(): string {
    return `${this.resourceType}.${this.resourceName}.resize_by`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
