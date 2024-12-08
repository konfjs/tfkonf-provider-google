import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeNetworkPeeringArgsTimeouts {
  read?: string;
}

export interface DataGoogleComputeNetworkPeeringArgs {
  name: string;
  network: string;
  timeouts?: DataGoogleComputeNetworkPeeringArgsTimeouts;
}

export class data_google_compute_network_peering extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeNetworkPeeringArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "google_compute_network_peering", resourceName);
  }

  get export_custom_routes(): string {
    return `data.${this.resourceType}.${this.resourceName}.export_custom_routes`;
  }

  get export_subnet_routes_with_public_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.export_subnet_routes_with_public_ip`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get import_custom_routes(): string {
    return `data.${this.resourceType}.${this.resourceName}.import_custom_routes`;
  }

  get import_subnet_routes_with_public_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.import_subnet_routes_with_public_ip`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get peer_network(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_network`;
  }

  get stack_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.stack_type`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get state_details(): string {
    return `data.${this.resourceType}.${this.resourceName}.state_details`;
  }
}
