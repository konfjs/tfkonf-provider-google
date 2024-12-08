import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeInstanceGroupMembershipArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeInstanceGroupMembershipArgs {
  instance: string;
  instance_group: string;
  zone?: string;
  timeouts?: GoogleComputeInstanceGroupMembershipArgsTimeouts;
}

export class google_compute_instance_group_membership extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeInstanceGroupMembershipArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_instance_group_membership", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
  }

  get instance_group(): string {
    return `${this.resourceType}.${this.resourceName}.instance_group`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
