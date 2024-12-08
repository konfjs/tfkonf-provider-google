import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVmwareengineNetworkPeeringArgs {
  name: string;
  project?: string;
}

export class data_google_vmwareengine_network_peering extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleVmwareengineNetworkPeeringArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vmwareengine_network_peering", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get export_custom_routes(): string {
    return `data.${this.resourceType}.${this.resourceName}.export_custom_routes`;
  }

  get export_custom_routes_with_public_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.export_custom_routes_with_public_ip`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get import_custom_routes(): string {
    return `data.${this.resourceType}.${this.resourceName}.import_custom_routes`;
  }

  get import_custom_routes_with_public_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.import_custom_routes_with_public_ip`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get peer_network(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_network`;
  }

  get peer_network_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.peer_network_type`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get state_details(): string {
    return `data.${this.resourceType}.${this.resourceName}.state_details`;
  }

  get uid(): string {
    return `data.${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }

  get vmware_engine_network(): string {
    return `data.${this.resourceType}.${this.resourceName}.vmware_engine_network`;
  }

  get vmware_engine_network_canonical(): string {
    return `data.${this.resourceType}.${this.resourceName}.vmware_engine_network_canonical`;
  }
}
