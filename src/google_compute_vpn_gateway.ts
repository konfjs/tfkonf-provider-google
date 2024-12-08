import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeVpnGatewayArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeVpnGatewayArgs {
  description?: string;
  name: string;
  network: string;
  timeouts?: GoogleComputeVpnGatewayArgsTimeouts;
}

export class google_compute_vpn_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeVpnGatewayArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_vpn_gateway", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_id`;
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
