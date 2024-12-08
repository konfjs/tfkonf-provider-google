import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVmwareengineNetworkPeeringArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVmwareengineNetworkPeeringArgs {
  description?: string;
  export_custom_routes?: boolean;
  export_custom_routes_with_public_ip?: boolean;
  import_custom_routes?: boolean;
  import_custom_routes_with_public_ip?: boolean;
  name: string;
  peer_network: string;
  peer_network_type: string;
  vmware_engine_network: string;
  timeouts?: GoogleVmwareengineNetworkPeeringArgsTimeouts;
}

export class google_vmwareengine_network_peering extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVmwareengineNetworkPeeringArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vmwareengine_network_peering", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get peer_network(): string {
    return `${this.resourceType}.${this.resourceName}.peer_network`;
  }

  get peer_network_type(): string {
    return `${this.resourceType}.${this.resourceName}.peer_network_type`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_details(): string {
    return `${this.resourceType}.${this.resourceName}.state_details`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get vmware_engine_network(): string {
    return `${this.resourceType}.${this.resourceName}.vmware_engine_network`;
  }

  get vmware_engine_network_canonical(): string {
    return `${this.resourceType}.${this.resourceName}.vmware_engine_network_canonical`;
  }
}
