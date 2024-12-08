import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkConnectivityPolicyBasedRouteArgsFilter {
  dest_range?: string;
  ip_protocol?: string;
  protocol_version: string;
  src_range?: string;
}

export interface GoogleNetworkConnectivityPolicyBasedRouteArgsInterconnectAttachment {
  region: string;
}

export interface GoogleNetworkConnectivityPolicyBasedRouteArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkConnectivityPolicyBasedRouteArgsVirtualMachine {
  tags: string[];
}

export interface GoogleNetworkConnectivityPolicyBasedRouteArgs {
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  network: string;
  next_hop_ilb_ip?: string;
  next_hop_other_routes?: string;
  priority?: number;
  filter: GoogleNetworkConnectivityPolicyBasedRouteArgsFilter;
  interconnect_attachment?: GoogleNetworkConnectivityPolicyBasedRouteArgsInterconnectAttachment;
  timeouts?: GoogleNetworkConnectivityPolicyBasedRouteArgsTimeouts;
  virtual_machine?: GoogleNetworkConnectivityPolicyBasedRouteArgsVirtualMachine;
}

export class google_network_connectivity_policy_based_route extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetworkConnectivityPolicyBasedRouteArgs) {
    const meta = {filter:{isBlock:true},interconnect_attachment:{isBlock:true},timeouts:{isBlock:true},virtual_machine:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_connectivity_policy_based_route", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kind(): string {
    return `${this.resourceType}.${this.resourceName}.kind`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get warnings(): string {
    return `${this.resourceType}.${this.resourceName}.warnings`;
  }
}
