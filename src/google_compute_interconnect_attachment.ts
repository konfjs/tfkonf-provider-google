import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeInterconnectAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeInterconnectAttachmentArgs {
  admin_enabled?: boolean;
  candidate_subnets?: string[];
  description?: string;
  encryption?: string;
  interconnect?: string;
  ipsec_internal_addresses?: string[];
  name: string;
  router: string;
  subnet_length?: number;
  timeouts?: GoogleComputeInterconnectAttachmentArgsTimeouts;
}

export class google_compute_interconnect_attachment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeInterconnectAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_interconnect_attachment", resourceName);
  }

  get bandwidth(): string {
    return `${this.resourceType}.${this.resourceName}.bandwidth`;
  }

  get cloud_router_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.cloud_router_ip_address`;
  }

  get cloud_router_ipv6_address(): string {
    return `${this.resourceType}.${this.resourceName}.cloud_router_ipv6_address`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get customer_router_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.customer_router_ip_address`;
  }

  get customer_router_ipv6_address(): string {
    return `${this.resourceType}.${this.resourceName}.customer_router_ipv6_address`;
  }

  get edge_availability_domain(): string {
    return `${this.resourceType}.${this.resourceName}.edge_availability_domain`;
  }

  get google_reference_id(): string {
    return `${this.resourceType}.${this.resourceName}.google_reference_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get mtu(): string {
    return `${this.resourceType}.${this.resourceName}.mtu`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get pairing_key(): string {
    return `${this.resourceType}.${this.resourceName}.pairing_key`;
  }

  get partner_asn(): string {
    return `${this.resourceType}.${this.resourceName}.partner_asn`;
  }

  get private_interconnect_info(): string {
    return `${this.resourceType}.${this.resourceName}.private_interconnect_info`;
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

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get stack_type(): string {
    return `${this.resourceType}.${this.resourceName}.stack_type`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get vlan_tag8021q(): string {
    return `${this.resourceType}.${this.resourceName}.vlan_tag8021q`;
  }
}
