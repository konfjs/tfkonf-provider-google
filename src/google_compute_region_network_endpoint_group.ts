import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionNetworkEndpointGroupArgsAppEngine {
  service?: string;
  url_mask?: string;
  version?: string;
}

export interface GoogleComputeRegionNetworkEndpointGroupArgsCloudFunction {
  function?: string;
  url_mask?: string;
}

export interface GoogleComputeRegionNetworkEndpointGroupArgsCloudRun {
  service?: string;
  tag?: string;
  url_mask?: string;
}

export interface GoogleComputeRegionNetworkEndpointGroupArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeRegionNetworkEndpointGroupArgs {
  description?: string;
  name: string;
  network?: string;
  network_endpoint_type?: string;
  psc_target_service?: string;
  region: string;
  subnetwork?: string;
  app_engine?: GoogleComputeRegionNetworkEndpointGroupArgsAppEngine;
  cloud_function?: GoogleComputeRegionNetworkEndpointGroupArgsCloudFunction;
  cloud_run?: GoogleComputeRegionNetworkEndpointGroupArgsCloudRun;
  timeouts?: GoogleComputeRegionNetworkEndpointGroupArgsTimeouts;
}

export class google_compute_region_network_endpoint_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeRegionNetworkEndpointGroupArgs) {
    const meta = {app_engine:{isBlock:true},cloud_function:{isBlock:true},cloud_run:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_network_endpoint_group", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
