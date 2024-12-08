import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNetworkEndpointArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeNetworkEndpointArgs {
  instance?: string;
  ip_address: string;
  network_endpoint_group: string;
  port?: number;
  timeouts?: GoogleComputeNetworkEndpointArgsTimeouts;
}

export class google_compute_network_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeNetworkEndpointArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_network_endpoint", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
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
