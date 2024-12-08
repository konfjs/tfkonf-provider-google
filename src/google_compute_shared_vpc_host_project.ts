import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSharedVpcHostProjectArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeSharedVpcHostProjectArgs {
  project: string;
  timeouts?: GoogleComputeSharedVpcHostProjectArgsTimeouts;
}

export class google_compute_shared_vpc_host_project extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeSharedVpcHostProjectArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_shared_vpc_host_project", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
