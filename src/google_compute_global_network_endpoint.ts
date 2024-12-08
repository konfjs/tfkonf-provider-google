import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeGlobalNetworkEndpointArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeGlobalNetworkEndpointArgs {
  fqdn?: string;
  global_network_endpoint_group: string;
  ip_address?: string;
  port: number;
  timeouts?: GoogleComputeGlobalNetworkEndpointArgsTimeouts;
}

export class google_compute_global_network_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeGlobalNetworkEndpointArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_global_network_endpoint", resourceName);
  }

  get global_network_endpoint_group(): string {
    return `${this.resourceType}.${this.resourceName}.global_network_endpoint_group`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
