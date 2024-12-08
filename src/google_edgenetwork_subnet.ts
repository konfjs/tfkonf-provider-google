import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEdgenetworkSubnetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEdgenetworkSubnetArgs {
  description?: string;
  ipv4_cidr?: string[];
  ipv6_cidr?: string[];
  labels?: { [key: string]: string };
  location: string;
  network: string;
  subnet_id: string;
  zone: string;
  timeouts?: GoogleEdgenetworkSubnetArgsTimeouts;
}

export class google_edgenetwork_subnet extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleEdgenetworkSubnetArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_edgenetwork_subnet", resourceName);
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get vlan_id(): string {
    return `${this.resourceType}.${this.resourceName}.vlan_id`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
