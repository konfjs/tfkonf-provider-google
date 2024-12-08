import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputePerInstanceConfigArgsPreservedStateDisk {
  delete_rule?: string;
  device_name: string;
  mode?: string;
  source: string;
}

export interface GoogleComputePerInstanceConfigArgsPreservedStateExternalIpIpAddress {
  address?: string;
}

export interface GoogleComputePerInstanceConfigArgsPreservedStateExternalIp {
  auto_delete?: string;
  interface_name: string;
  ip_address?: GoogleComputePerInstanceConfigArgsPreservedStateExternalIpIpAddress;
}

export interface GoogleComputePerInstanceConfigArgsPreservedStateInternalIpIpAddress {
  address?: string;
}

export interface GoogleComputePerInstanceConfigArgsPreservedStateInternalIp {
  auto_delete?: string;
  interface_name: string;
  ip_address?: GoogleComputePerInstanceConfigArgsPreservedStateInternalIpIpAddress;
}

export interface GoogleComputePerInstanceConfigArgsPreservedState {
  metadata?: { [key: string]: string };
  disk?: GoogleComputePerInstanceConfigArgsPreservedStateDisk[];
  external_ip?: GoogleComputePerInstanceConfigArgsPreservedStateExternalIp[];
  internal_ip?: GoogleComputePerInstanceConfigArgsPreservedStateInternalIp[];
}

export interface GoogleComputePerInstanceConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputePerInstanceConfigArgs {
  instance_group_manager: string;
  minimal_action?: string;
  most_disruptive_allowed_action?: string;
  name: string;
  remove_instance_on_destroy?: boolean;
  remove_instance_state_on_destroy?: boolean;
  preserved_state?: GoogleComputePerInstanceConfigArgsPreservedState;
  timeouts?: GoogleComputePerInstanceConfigArgsTimeouts;
}

export class google_compute_per_instance_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputePerInstanceConfigArgs) {
    const meta = {preserved_state:{isBlock:true,disk:{isBlock:true},external_ip:{isBlock:true,ip_address:{isBlock:true}},internal_ip:{isBlock:true,ip_address:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_per_instance_config", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_group_manager(): string {
    return `${this.resourceType}.${this.resourceName}.instance_group_manager`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
