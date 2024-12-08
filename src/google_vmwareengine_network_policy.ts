import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVmwareengineNetworkPolicyArgsExternalIp {
  enabled?: boolean;
}

export interface GoogleVmwareengineNetworkPolicyArgsInternetAccess {
  enabled?: boolean;
}

export interface GoogleVmwareengineNetworkPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVmwareengineNetworkPolicyArgs {
  description?: string;
  edge_services_cidr: string;
  location: string;
  name: string;
  vmware_engine_network: string;
  external_ip?: GoogleVmwareengineNetworkPolicyArgsExternalIp;
  internet_access?: GoogleVmwareengineNetworkPolicyArgsInternetAccess;
  timeouts?: GoogleVmwareengineNetworkPolicyArgsTimeouts;
}

export class google_vmwareengine_network_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVmwareengineNetworkPolicyArgs) {
    const meta = {external_ip:{isBlock:true},internet_access:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vmwareengine_network_policy", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get edge_services_cidr(): string {
    return `${this.resourceType}.${this.resourceName}.edge_services_cidr`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get vmware_engine_network(): string {
    return `${this.resourceType}.${this.resourceName}.vmware_engine_network`;
  }

  get vmware_engine_network_canonical(): string {
    return `${this.resourceType}.${this.resourceName}.vmware_engine_network_canonical`;
  }
}
