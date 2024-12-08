import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRouterArgsBgpAdvertisedIpRanges {
  description?: string;
  range: string;
}

export interface GoogleComputeRouterArgsBgp {
  advertise_mode?: string;
  advertised_groups?: string[];
  asn: number;
  keepalive_interval?: number;
  advertised_ip_ranges?: GoogleComputeRouterArgsBgpAdvertisedIpRanges[];
}

export interface GoogleComputeRouterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRouterArgs {
  description?: string;
  encrypted_interconnect_router?: boolean;
  name: string;
  network: string;
  bgp?: GoogleComputeRouterArgsBgp;
  timeouts?: GoogleComputeRouterArgsTimeouts;
}

export class google_compute_router extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeRouterArgs) {
    const meta = {bgp:{isBlock:true,advertised_ip_ranges:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_router", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
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
