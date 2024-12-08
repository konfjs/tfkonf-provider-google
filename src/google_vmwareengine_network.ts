import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVmwareengineNetworkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVmwareengineNetworkArgs {
  description?: string;
  location: string;
  name: string;
  type: string;
  timeouts?: GoogleVmwareengineNetworkArgsTimeouts;
}

export class google_vmwareengine_network extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleVmwareengineNetworkArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vmwareengine_network", resourceName);
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get vpc_networks(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_networks`;
  }
}
