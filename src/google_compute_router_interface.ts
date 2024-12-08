import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRouterInterfaceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeRouterInterfaceArgs {
  interconnect_attachment?: string;
  name: string;
  private_ip_address?: string;
  router: string;
  subnetwork?: string;
  vpn_tunnel?: string;
  timeouts?: GoogleComputeRouterInterfaceArgsTimeouts;
}

export class google_compute_router_interface extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRouterInterfaceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_router_interface", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_range(): string {
    return `${this.resourceType}.${this.resourceName}.ip_range`;
  }

  get ip_version(): string {
    return `${this.resourceType}.${this.resourceName}.ip_version`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get redundant_interface(): string {
    return `${this.resourceType}.${this.resourceName}.redundant_interface`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get router(): string {
    return `${this.resourceType}.${this.resourceName}.router`;
  }
}
