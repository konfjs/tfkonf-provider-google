import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVmwareengineNetworkArgs {
  location: string;
  name: string;
  project?: string;
}

export class data_google_vmwareengine_network extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleVmwareengineNetworkArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vmwareengine_network", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
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

  get vpc_networks(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_networks`;
  }
}
