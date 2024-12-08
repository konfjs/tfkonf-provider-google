import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeProjectDefaultNetworkTierArgsTimeouts {
  create?: string;
}

export interface GoogleComputeProjectDefaultNetworkTierArgs {
  network_tier: string;
  timeouts?: GoogleComputeProjectDefaultNetworkTierArgsTimeouts;
}

export class google_compute_project_default_network_tier extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeProjectDefaultNetworkTierArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_project_default_network_tier", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_tier(): string {
    return `${this.resourceType}.${this.resourceName}.network_tier`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
