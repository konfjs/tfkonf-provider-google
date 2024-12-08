import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVmwareengineNetworkPolicyArgs {
  location: string;
  name: string;
  project?: string;
}

export class data_google_vmwareengine_network_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleVmwareengineNetworkPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vmwareengine_network_policy", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get edge_services_cidr(): string {
    return `data.${this.resourceType}.${this.resourceName}.edge_services_cidr`;
  }

  get external_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.external_ip`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get internet_access(): string {
    return `data.${this.resourceType}.${this.resourceName}.internet_access`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get uid(): string {
    return `data.${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }

  get vmware_engine_network(): string {
    return `data.${this.resourceType}.${this.resourceName}.vmware_engine_network`;
  }

  get vmware_engine_network_canonical(): string {
    return `data.${this.resourceType}.${this.resourceName}.vmware_engine_network_canonical`;
  }
}
