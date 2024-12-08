import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNetworkEndpointsArgsNetworkEndpoints {
  instance?: string;
  ip_address: string;
  port?: number;
}

export interface GoogleComputeNetworkEndpointsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeNetworkEndpointsArgs {
  network_endpoint_group: string;
  network_endpoints?: GoogleComputeNetworkEndpointsArgsNetworkEndpoints[];
  timeouts?: GoogleComputeNetworkEndpointsArgsTimeouts;
}

export class google_compute_network_endpoints extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeNetworkEndpointsArgs) {
    const meta = {network_endpoints:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_network_endpoints", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network_endpoint_group(): string {
    return `${this.resourceType}.${this.resourceName}.network_endpoint_group`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
