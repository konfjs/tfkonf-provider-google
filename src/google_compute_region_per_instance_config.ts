import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionPerInstanceConfigArgsPreservedStateDisk {
  delete_rule?: string;
  device_name: string;
  mode?: string;
  source: string;
}

export interface GoogleComputeRegionPerInstanceConfigArgsPreservedStateExternalIpIpAddress {
  address?: string;
}

export interface GoogleComputeRegionPerInstanceConfigArgsPreservedStateExternalIp {
  auto_delete?: string;
  interface_name: string;
  ip_address?: GoogleComputeRegionPerInstanceConfigArgsPreservedStateExternalIpIpAddress;
}

export interface GoogleComputeRegionPerInstanceConfigArgsPreservedStateInternalIpIpAddress {
  address?: string;
}

export interface GoogleComputeRegionPerInstanceConfigArgsPreservedStateInternalIp {
  auto_delete?: string;
  interface_name: string;
  ip_address?: GoogleComputeRegionPerInstanceConfigArgsPreservedStateInternalIpIpAddress;
}

export interface GoogleComputeRegionPerInstanceConfigArgsPreservedState {
  metadata?: { [key: string]: string };
  disk?: GoogleComputeRegionPerInstanceConfigArgsPreservedStateDisk[];
  external_ip?: GoogleComputeRegionPerInstanceConfigArgsPreservedStateExternalIp[];
  internal_ip?: GoogleComputeRegionPerInstanceConfigArgsPreservedStateInternalIp[];
}

export interface GoogleComputeRegionPerInstanceConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionPerInstanceConfigArgs {
  minimal_action?: string;
  most_disruptive_allowed_action?: string;
  name: string;
  region_instance_group_manager: string;
  remove_instance_on_destroy?: boolean;
  remove_instance_state_on_destroy?: boolean;
  preserved_state?: GoogleComputeRegionPerInstanceConfigArgsPreservedState;
  timeouts?: GoogleComputeRegionPerInstanceConfigArgsTimeouts;
}

export class google_compute_region_per_instance_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeRegionPerInstanceConfigArgs) {
    const meta = {preserved_state:{isBlock:true,disk:{isBlock:true},external_ip:{isBlock:true,ip_address:{isBlock:true}},internal_ip:{isBlock:true,ip_address:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_per_instance_config", resourceName);
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

  get region_instance_group_manager(): string {
    return `${this.resourceType}.${this.resourceName}.region_instance_group_manager`;
  }
}
