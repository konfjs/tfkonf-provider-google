import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelDestGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIapTunnelDestGroupArgs {
  cidrs?: string[];
  fqdns?: string[];
  group_name: string;
  timeouts?: GoogleIapTunnelDestGroupArgsTimeouts;
}

export class google_iap_tunnel_dest_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapTunnelDestGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_tunnel_dest_group", resourceName);
  }

  get group_name(): string {
    return `${this.resourceType}.${this.resourceName}.group_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }
}
