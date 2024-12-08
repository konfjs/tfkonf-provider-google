import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNetworkPeeringArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeNetworkPeeringArgs {
  export_custom_routes?: boolean;
  export_subnet_routes_with_public_ip?: boolean;
  import_custom_routes?: boolean;
  import_subnet_routes_with_public_ip?: boolean;
  name: string;
  network: string;
  peer_network: string;
  stack_type?: string;
  timeouts?: GoogleComputeNetworkPeeringArgsTimeouts;
}

export class google_compute_network_peering extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeNetworkPeeringArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_network_peering", resourceName);
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

  get peer_network(): string {
    return `${this.resourceType}.${this.resourceName}.peer_network`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_details(): string {
    return `${this.resourceType}.${this.resourceName}.state_details`;
  }
}
