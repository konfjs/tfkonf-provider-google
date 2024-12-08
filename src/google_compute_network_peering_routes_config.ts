import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNetworkPeeringRoutesConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeNetworkPeeringRoutesConfigArgs {
  export_custom_routes: boolean;
  import_custom_routes: boolean;
  network: string;
  peering: string;
  timeouts?: GoogleComputeNetworkPeeringRoutesConfigArgsTimeouts;
}

export class google_compute_network_peering_routes_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeNetworkPeeringRoutesConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_network_peering_routes_config", resourceName);
  }

  get export_custom_routes(): string {
    return `${this.resourceType}.${this.resourceName}.export_custom_routes`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get import_custom_routes(): string {
    return `${this.resourceType}.${this.resourceName}.import_custom_routes`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get peering(): string {
    return `${this.resourceType}.${this.resourceName}.peering`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
