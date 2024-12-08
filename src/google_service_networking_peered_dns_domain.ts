import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleServiceNetworkingPeeredDnsDomainArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface GoogleServiceNetworkingPeeredDnsDomainArgs {
  dns_suffix: string;
  name: string;
  network: string;
  service?: string;
  timeouts?: GoogleServiceNetworkingPeeredDnsDomainArgsTimeouts;
}

export class google_service_networking_peered_dns_domain extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleServiceNetworkingPeeredDnsDomainArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_service_networking_peered_dns_domain", resourceName);
  }

  get dns_suffix(): string {
    return `${this.resourceType}.${this.resourceName}.dns_suffix`;
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

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
