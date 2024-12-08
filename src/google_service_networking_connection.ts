import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleServiceNetworkingConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleServiceNetworkingConnectionArgs {
  deletion_policy?: string;
  network: string;
  reserved_peering_ranges: string[];
  service: string;
  update_on_creation_fail?: boolean;
  timeouts?: GoogleServiceNetworkingConnectionArgsTimeouts;
}

export class google_service_networking_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleServiceNetworkingConnectionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_service_networking_connection", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get peering(): string {
    return `${this.resourceType}.${this.resourceName}.peering`;
  }

  get reserved_peering_ranges(): string {
    return `${this.resourceType}.${this.resourceName}.reserved_peering_ranges`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }
}
