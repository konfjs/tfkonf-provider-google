import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVmwareengineExternalAddressArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVmwareengineExternalAddressArgs {
  description?: string;
  internal_ip: string;
  name: string;
  parent: string;
  timeouts?: GoogleVmwareengineExternalAddressArgsTimeouts;
}

export class google_vmwareengine_external_address extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVmwareengineExternalAddressArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vmwareengine_external_address", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get external_ip(): string {
    return `${this.resourceType}.${this.resourceName}.external_ip`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get internal_ip(): string {
    return `${this.resourceType}.${this.resourceName}.internal_ip`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
