import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeExternalVpnGatewayArgsInterface {
  id?: number;
  ip_address?: string;
  ipv6_address?: string;
}

export interface GoogleComputeExternalVpnGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeExternalVpnGatewayArgs {
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  redundancy_type?: string;
  interface?: GoogleComputeExternalVpnGatewayArgsInterface[];
  timeouts?: GoogleComputeExternalVpnGatewayArgsTimeouts;
}

export class google_compute_external_vpn_gateway extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeExternalVpnGatewayArgs) {
    const meta = {interface:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_external_vpn_gateway", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get label_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.label_fingerprint`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
