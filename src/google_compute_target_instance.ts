import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeTargetInstanceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeTargetInstanceArgs {
  description?: string;
  instance: string;
  name: string;
  nat_policy?: string;
  timeouts?: GoogleComputeTargetInstanceArgsTimeouts;
}

export class google_compute_target_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeTargetInstanceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_target_instance", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
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

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
