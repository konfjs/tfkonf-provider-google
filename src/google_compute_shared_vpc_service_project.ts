import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSharedVpcServiceProjectArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeSharedVpcServiceProjectArgs {
  deletion_policy?: string;
  host_project: string;
  service_project: string;
  timeouts?: GoogleComputeSharedVpcServiceProjectArgsTimeouts;
}

export class google_compute_shared_vpc_service_project extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeSharedVpcServiceProjectArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_shared_vpc_service_project", resourceName);
  }

  get host_project(): string {
    return `${this.resourceType}.${this.resourceName}.host_project`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get service_project(): string {
    return `${this.resourceType}.${this.resourceName}.service_project`;
  }
}
