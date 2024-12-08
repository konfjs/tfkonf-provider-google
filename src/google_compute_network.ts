import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNetworkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeNetworkArgs {
  auto_create_subnetworks?: boolean;
  delete_default_routes_on_create?: boolean;
  description?: string;
  enable_ula_internal_ipv6?: boolean;
  name: string;
  network_firewall_policy_enforcement_order?: string;
  timeouts?: GoogleComputeNetworkArgsTimeouts;
}

export class google_compute_network extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeNetworkArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_network", resourceName);
  }

  get gateway_ipv4(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_ipv4`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get internal_ipv6_range(): string {
    return `${this.resourceType}.${this.resourceName}.internal_ipv6_range`;
  }

  get mtu(): string {
    return `${this.resourceType}.${this.resourceName}.mtu`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get numeric_id(): string {
    return `${this.resourceType}.${this.resourceName}.numeric_id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get routing_mode(): string {
    return `${this.resourceType}.${this.resourceName}.routing_mode`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
