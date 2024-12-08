import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeGlobalNetworkEndpointGroupArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeGlobalNetworkEndpointGroupArgs {
  default_port?: number;
  description?: string;
  name: string;
  network_endpoint_type: string;
  timeouts?: GoogleComputeGlobalNetworkEndpointGroupArgsTimeouts;
}

export class google_compute_global_network_endpoint_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeGlobalNetworkEndpointGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_global_network_endpoint_group", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network_endpoint_type(): string {
    return `${this.resourceType}.${this.resourceName}.network_endpoint_type`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
