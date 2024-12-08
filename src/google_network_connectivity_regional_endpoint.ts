import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkConnectivityRegionalEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkConnectivityRegionalEndpointArgs {
  access_type: string;
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  target_google_api: string;
  timeouts?: GoogleNetworkConnectivityRegionalEndpointArgsTimeouts;
}

export class google_network_connectivity_regional_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivityRegionalEndpointArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_connectivity_regional_endpoint", resourceName);
  }

  get access_type(): string {
    return `${this.resourceType}.${this.resourceName}.access_type`;
  }

  get address(): string {
    return `${this.resourceType}.${this.resourceName}.address`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get psc_forwarding_rule(): string {
    return `${this.resourceType}.${this.resourceName}.psc_forwarding_rule`;
  }

  get subnetwork(): string {
    return `${this.resourceType}.${this.resourceName}.subnetwork`;
  }

  get target_google_api(): string {
    return `${this.resourceType}.${this.resourceName}.target_google_api`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
