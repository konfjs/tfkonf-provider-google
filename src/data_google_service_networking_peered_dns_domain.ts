import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleServiceNetworkingPeeredDnsDomainArgs {
  name: string;
  network: string;
  project: string;
  service: string;
}

export class data_google_service_networking_peered_dns_domain extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleServiceNetworkingPeeredDnsDomainArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_service_networking_peered_dns_domain", resourceName);
  }

  get dns_suffix(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_suffix`;
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

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get service(): string {
    return `data.${this.resourceType}.${this.resourceName}.service`;
  }
}
