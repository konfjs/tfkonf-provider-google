import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleServiceNetworkingVpcServiceControlsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleServiceNetworkingVpcServiceControlsArgs {
  enabled: boolean;
  network: string;
  project?: string;
  service: string;
  timeouts?: GoogleServiceNetworkingVpcServiceControlsArgsTimeouts;
}

export class google_service_networking_vpc_service_controls extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleServiceNetworkingVpcServiceControlsArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_service_networking_vpc_service_controls", resourceName);
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }
}
