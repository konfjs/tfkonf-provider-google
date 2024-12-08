import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkServicesEdgeCacheKeysetArgsPublicKey {
  id: string;
  managed?: boolean;
  value?: string;
}

export interface GoogleNetworkServicesEdgeCacheKeysetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkServicesEdgeCacheKeysetArgsValidationSharedKeys {
  secret_version: string;
}

export interface GoogleNetworkServicesEdgeCacheKeysetArgs {
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  public_key?: GoogleNetworkServicesEdgeCacheKeysetArgsPublicKey[];
  timeouts?: GoogleNetworkServicesEdgeCacheKeysetArgsTimeouts;
  validation_shared_keys?: GoogleNetworkServicesEdgeCacheKeysetArgsValidationSharedKeys[];
}

export class google_network_services_edge_cache_keyset extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetworkServicesEdgeCacheKeysetArgs) {
    const meta = {public_key:{isBlock:true},timeouts:{isBlock:true},validation_shared_keys:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_services_edge_cache_keyset", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
