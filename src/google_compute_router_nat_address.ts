import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRouterNatAddressArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRouterNatAddressArgs {
  drain_nat_ips?: string[];
  nat_ips: string[];
  router: string;
  router_nat: string;
  timeouts?: GoogleComputeRouterNatAddressArgsTimeouts;
}

export class google_compute_router_nat_address extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeRouterNatAddressArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_router_nat_address", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get nat_ips(): string {
    return `${this.resourceType}.${this.resourceName}.nat_ips`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get router(): string {
    return `${this.resourceType}.${this.resourceName}.router`;
  }

  get router_nat(): string {
    return `${this.resourceType}.${this.resourceName}.router_nat`;
  }
}
