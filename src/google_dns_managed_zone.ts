import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDnsManagedZoneArgsCloudLoggingConfig {
  enable_logging: boolean;
}

export interface GoogleDnsManagedZoneArgsDnssecConfigDefaultKeySpecs {
  algorithm?: string;
  key_length?: number;
  key_type?: string;
  kind?: string;
}

export interface GoogleDnsManagedZoneArgsDnssecConfig {
  kind?: string;
  state?: string;
  default_key_specs?: GoogleDnsManagedZoneArgsDnssecConfigDefaultKeySpecs[];
}

export interface GoogleDnsManagedZoneArgsForwardingConfigTargetNameServers {
  forwarding_path?: string;
  ipv4_address: string;
}

export interface GoogleDnsManagedZoneArgsForwardingConfig {
  target_name_servers: GoogleDnsManagedZoneArgsForwardingConfigTargetNameServers[];
}

export interface GoogleDnsManagedZoneArgsPeeringConfigTargetNetwork {
  network_url: string;
}

export interface GoogleDnsManagedZoneArgsPeeringConfig {
  target_network: GoogleDnsManagedZoneArgsPeeringConfigTargetNetwork;
}

export interface GoogleDnsManagedZoneArgsPrivateVisibilityConfigGkeClusters {
  gke_cluster_name: string;
}

export interface GoogleDnsManagedZoneArgsPrivateVisibilityConfigNetworks {
  network_url: string;
}

export interface GoogleDnsManagedZoneArgsPrivateVisibilityConfig {
  gke_clusters?: GoogleDnsManagedZoneArgsPrivateVisibilityConfigGkeClusters[];
  networks?: GoogleDnsManagedZoneArgsPrivateVisibilityConfigNetworks[];
}

export interface GoogleDnsManagedZoneArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDnsManagedZoneArgs {
  description?: string;
  dns_name: string;
  force_destroy?: boolean;
  labels?: { [key: string]: string };
  name: string;
  visibility?: string;
  cloud_logging_config?: GoogleDnsManagedZoneArgsCloudLoggingConfig;
  dnssec_config?: GoogleDnsManagedZoneArgsDnssecConfig;
  forwarding_config?: GoogleDnsManagedZoneArgsForwardingConfig;
  peering_config?: GoogleDnsManagedZoneArgsPeeringConfig;
  private_visibility_config?: GoogleDnsManagedZoneArgsPrivateVisibilityConfig;
  timeouts?: GoogleDnsManagedZoneArgsTimeouts;
}

export class google_dns_managed_zone extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDnsManagedZoneArgs) {
    const meta = {cloud_logging_config:{isBlock:true},dnssec_config:{isBlock:true,default_key_specs:{isBlock:true}},forwarding_config:{isBlock:true,target_name_servers:{isBlock:true}},peering_config:{isBlock:true,target_network:{isBlock:true}},private_visibility_config:{isBlock:true,gke_clusters:{isBlock:true},networks:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dns_managed_zone", resourceName);
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.managed_zone_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_servers(): string {
    return `${this.resourceType}.${this.resourceName}.name_servers`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
