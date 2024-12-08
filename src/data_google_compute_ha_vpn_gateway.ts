import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeHaVpnGatewayArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_compute_ha_vpn_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeHaVpnGatewayArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_ha_vpn_gateway", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get gateway_ip_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.gateway_ip_version`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get stack_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.stack_type`;
  }

  get vpn_interfaces(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpn_interfaces`;
  }
}
