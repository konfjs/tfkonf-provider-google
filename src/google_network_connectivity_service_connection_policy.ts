import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkConnectivityServiceConnectionPolicyArgsPscConfig {
  limit?: string;
  subnetworks: string[];
}

export interface GoogleNetworkConnectivityServiceConnectionPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkConnectivityServiceConnectionPolicyArgs {
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  network: string;
  service_class: string;
  psc_config?: GoogleNetworkConnectivityServiceConnectionPolicyArgsPscConfig;
  timeouts?: GoogleNetworkConnectivityServiceConnectionPolicyArgsTimeouts;
}

export class google_network_connectivity_service_connection_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivityServiceConnectionPolicyArgs) {
    const meta = {psc_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_connectivity_service_connection_policy", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get infrastructure(): string {
    return `${this.resourceType}.${this.resourceName}.infrastructure`;
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

  get psc_connections(): string {
    return `${this.resourceType}.${this.resourceName}.psc_connections`;
  }

  get service_class(): string {
    return `${this.resourceType}.${this.resourceName}.service_class`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
