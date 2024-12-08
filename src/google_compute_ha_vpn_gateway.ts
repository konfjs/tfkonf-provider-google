import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeHaVpnGatewayArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeHaVpnGatewayArgsVpnInterfaces {
  id?: number;
  interconnect_attachment?: string;
}

export interface GoogleComputeHaVpnGatewayArgs {
  description?: string;
  gateway_ip_version?: string;
  name: string;
  network: string;
  stack_type?: string;
  timeouts?: GoogleComputeHaVpnGatewayArgsTimeouts;
  vpn_interfaces?: GoogleComputeHaVpnGatewayArgsVpnInterfaces[];
}

export class google_compute_ha_vpn_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeHaVpnGatewayArgs) {
    const meta = {timeouts:{isBlock:true},vpn_interfaces:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_ha_vpn_gateway", resourceName);
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
