import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNetworkEndpointGroupArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeNetworkEndpointGroupArgs {
  default_port?: number;
  description?: string;
  name: string;
  network: string;
  network_endpoint_type?: string;
  subnetwork?: string;
  timeouts?: GoogleComputeNetworkEndpointGroupArgsTimeouts;
}

export class google_compute_network_endpoint_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeNetworkEndpointGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_network_endpoint_group", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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
