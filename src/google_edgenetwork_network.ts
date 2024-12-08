import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEdgenetworkNetworkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEdgenetworkNetworkArgs {
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  mtu?: number;
  network_id: string;
  zone: string;
  timeouts?: GoogleEdgenetworkNetworkArgsTimeouts;
}

export class google_edgenetwork_network extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleEdgenetworkNetworkArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_edgenetwork_network", resourceName);
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

  get network_id(): string {
    return `${this.resourceType}.${this.resourceName}.network_id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
