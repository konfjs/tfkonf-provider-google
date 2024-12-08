import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRouteArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeRouteArgs {
  description?: string;
  dest_range: string;
  name: string;
  network: string;
  next_hop_gateway?: string;
  next_hop_ilb?: string;
  next_hop_instance?: string;
  next_hop_vpn_tunnel?: string;
  priority?: number;
  tags?: string[];
  timeouts?: GoogleComputeRouteArgsTimeouts;
}

export class google_compute_route extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeRouteArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_route", resourceName);
  }

  get dest_range(): string {
    return `${this.resourceType}.${this.resourceName}.dest_range`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get next_hop_instance_zone(): string {
    return `${this.resourceType}.${this.resourceName}.next_hop_instance_zone`;
  }

  get next_hop_ip(): string {
    return `${this.resourceType}.${this.resourceName}.next_hop_ip`;
  }

  get next_hop_network(): string {
    return `${this.resourceType}.${this.resourceName}.next_hop_network`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
