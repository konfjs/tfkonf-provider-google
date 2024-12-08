import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVmwareengineSubnetArgs {
  name: string;
  parent: string;
}

export class data_google_vmwareengine_subnet extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleVmwareengineSubnetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vmwareengine_subnet", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get dhcp_address_ranges(): string {
    return `data.${this.resourceType}.${this.resourceName}.dhcp_address_ranges`;
  }

  get gateway_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.gateway_id`;
  }

  get gateway_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.gateway_ip`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_cidr_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_cidr_range`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get standard_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.standard_config`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get uid(): string {
    return `data.${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }

  get vlan_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vlan_id`;
  }
}
