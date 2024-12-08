import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVmwareengineExternalAddressArgs {
  name: string;
  parent: string;
}

export class data_google_vmwareengine_external_address extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleVmwareengineExternalAddressArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vmwareengine_external_address", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get external_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.external_ip`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get internal_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.internal_ip`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `data.${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
