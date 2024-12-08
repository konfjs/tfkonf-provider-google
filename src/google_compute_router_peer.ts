import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRouterPeerArgsAdvertisedIpRanges {
  description?: string;
  range: string;
}

export interface GoogleComputeRouterPeerArgsBfd {
  min_receive_interval?: number;
  min_transmit_interval?: number;
  multiplier?: number;
  session_initialization_mode: string;
}

export interface GoogleComputeRouterPeerArgsCustomLearnedIpRanges {
  range: string;
}

export interface GoogleComputeRouterPeerArgsMd5AuthenticationKey {
  key: string;
  name: string;
}

export interface GoogleComputeRouterPeerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRouterPeerArgs {
  advertise_mode?: string;
  advertised_groups?: string[];
  advertised_route_priority?: number;
  custom_learned_route_priority?: number;
  enable?: boolean;
  enable_ipv6?: boolean;
  interface: string;
  name: string;
  peer_asn: number;
  router: string;
  router_appliance_instance?: string;
  advertised_ip_ranges?: GoogleComputeRouterPeerArgsAdvertisedIpRanges[];
  bfd?: GoogleComputeRouterPeerArgsBfd;
  custom_learned_ip_ranges?: GoogleComputeRouterPeerArgsCustomLearnedIpRanges[];
  md5_authentication_key?: GoogleComputeRouterPeerArgsMd5AuthenticationKey;
  timeouts?: GoogleComputeRouterPeerArgsTimeouts;
}

export class google_compute_router_peer extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRouterPeerArgs) {
    const meta = {advertised_ip_ranges:{isBlock:true},bfd:{isBlock:true},custom_learned_ip_ranges:{isBlock:true},md5_authentication_key:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_router_peer", resourceName);
  }

  get enable_ipv4(): string {
    return `${this.resourceType}.${this.resourceName}.enable_ipv4`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get interface(): string {
    return `${this.resourceType}.${this.resourceName}.interface`;
  }

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get ipv4_nexthop_address(): string {
    return `${this.resourceType}.${this.resourceName}.ipv4_nexthop_address`;
  }

  get ipv6_nexthop_address(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_nexthop_address`;
  }

  get management_type(): string {
    return `${this.resourceType}.${this.resourceName}.management_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get peer_asn(): string {
    return `${this.resourceType}.${this.resourceName}.peer_asn`;
  }

  get peer_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.peer_ip_address`;
  }

  get peer_ipv4_nexthop_address(): string {
    return `${this.resourceType}.${this.resourceName}.peer_ipv4_nexthop_address`;
  }

  get peer_ipv6_nexthop_address(): string {
    return `${this.resourceType}.${this.resourceName}.peer_ipv6_nexthop_address`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get router(): string {
    return `${this.resourceType}.${this.resourceName}.router`;
  }
}
