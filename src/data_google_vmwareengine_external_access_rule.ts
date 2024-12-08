import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVmwareengineExternalAccessRuleArgs {
  name: string;
  parent: string;
}

export class data_google_vmwareengine_external_access_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleVmwareengineExternalAccessRuleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vmwareengine_external_access_rule", resourceName);
  }

  get action(): string {
    return `data.${this.resourceType}.${this.resourceName}.action`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get destination_ip_ranges(): string {
    return `data.${this.resourceType}.${this.resourceName}.destination_ip_ranges`;
  }

  get destination_ports(): string {
    return `data.${this.resourceType}.${this.resourceName}.destination_ports`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_protocol`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get priority(): string {
    return `data.${this.resourceType}.${this.resourceName}.priority`;
  }

  get source_ip_ranges(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_ip_ranges`;
  }

  get source_ports(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_ports`;
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
