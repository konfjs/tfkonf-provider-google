import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkConnectivitySpokeArgsLinkedInterconnectAttachments {
  include_import_ranges?: string[];
  site_to_site_data_transfer: boolean;
  uris: string[];
}

export interface GoogleNetworkConnectivitySpokeArgsLinkedProducerVpcNetwork {
  exclude_export_ranges?: string[];
  include_export_ranges?: string[];
  network: string;
  peering: string;
}

export interface GoogleNetworkConnectivitySpokeArgsLinkedRouterApplianceInstancesInstances {
  ip_address?: string;
  virtual_machine?: string;
}

export interface GoogleNetworkConnectivitySpokeArgsLinkedRouterApplianceInstances {
  include_import_ranges?: string[];
  site_to_site_data_transfer: boolean;
  instances: GoogleNetworkConnectivitySpokeArgsLinkedRouterApplianceInstancesInstances[];
}

export interface GoogleNetworkConnectivitySpokeArgsLinkedVpcNetwork {
  exclude_export_ranges?: string[];
  include_export_ranges?: string[];
  uri: string;
}

export interface GoogleNetworkConnectivitySpokeArgsLinkedVpnTunnels {
  include_import_ranges?: string[];
  site_to_site_data_transfer: boolean;
  uris: string[];
}

export interface GoogleNetworkConnectivitySpokeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkConnectivitySpokeArgs {
  description?: string;
  hub: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  linked_interconnect_attachments?: GoogleNetworkConnectivitySpokeArgsLinkedInterconnectAttachments;
  linked_producer_vpc_network?: GoogleNetworkConnectivitySpokeArgsLinkedProducerVpcNetwork;
  linked_router_appliance_instances?: GoogleNetworkConnectivitySpokeArgsLinkedRouterApplianceInstances;
  linked_vpc_network?: GoogleNetworkConnectivitySpokeArgsLinkedVpcNetwork;
  linked_vpn_tunnels?: GoogleNetworkConnectivitySpokeArgsLinkedVpnTunnels;
  timeouts?: GoogleNetworkConnectivitySpokeArgsTimeouts;
}

export class google_network_connectivity_spoke extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetworkConnectivitySpokeArgs) {
    const meta = {linked_interconnect_attachments:{isBlock:true},linked_producer_vpc_network:{isBlock:true},linked_router_appliance_instances:{isBlock:true,instances:{isBlock:true}},linked_vpc_network:{isBlock:true},linked_vpn_tunnels:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_connectivity_spoke", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get hub(): string {
    return `${this.resourceType}.${this.resourceName}.hub`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get unique_id(): string {
    return `${this.resourceType}.${this.resourceName}.unique_id`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
