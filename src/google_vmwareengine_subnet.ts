import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVmwareengineSubnetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVmwareengineSubnetArgs {
  ip_cidr_range: string;
  name: string;
  parent: string;
  timeouts?: GoogleVmwareengineSubnetArgsTimeouts;
}

export class google_vmwareengine_subnet extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVmwareengineSubnetArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vmwareengine_subnet", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get dhcp_address_ranges(): string {
    return `${this.resourceType}.${this.resourceName}.dhcp_address_ranges`;
  }

  get gateway_id(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_id`;
  }

  get gateway_ip(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_ip`;
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

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get standard_config(): string {
    return `${this.resourceType}.${this.resourceName}.standard_config`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get vlan_id(): string {
    return `${this.resourceType}.${this.resourceName}.vlan_id`;
  }
}
