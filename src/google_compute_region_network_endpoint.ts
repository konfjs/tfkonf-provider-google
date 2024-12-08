import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionNetworkEndpointArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeRegionNetworkEndpointArgs {
  fqdn?: string;
  ip_address?: string;
  port: number;
  region_network_endpoint_group: string;
  timeouts?: GoogleComputeRegionNetworkEndpointArgsTimeouts;
}

export class google_compute_region_network_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionNetworkEndpointArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_network_endpoint", resourceName);
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

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get region_network_endpoint_group(): string {
    return `${this.resourceType}.${this.resourceName}.region_network_endpoint_group`;
  }
}
