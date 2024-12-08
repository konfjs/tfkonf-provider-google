import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkConnectivityInternalRangeArgsMigration {
  source: string;
  target: string;
}

export interface GoogleNetworkConnectivityInternalRangeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkConnectivityInternalRangeArgs {
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  network: string;
  overlaps?: string[];
  peering: string;
  prefix_length?: number;
  target_cidr_range?: string[];
  usage: string;
  migration?: GoogleNetworkConnectivityInternalRangeArgsMigration;
  timeouts?: GoogleNetworkConnectivityInternalRangeArgsTimeouts;
}

export class google_network_connectivity_internal_range extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivityInternalRangeArgs) {
    const meta = {migration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_connectivity_internal_range", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_cidr_range(): string {
    return `${this.resourceType}.${this.resourceName}.ip_cidr_range`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get usage(): string {
    return `${this.resourceType}.${this.resourceName}.usage`;
  }

  get users(): string {
    return `${this.resourceType}.${this.resourceName}.users`;
  }
}
