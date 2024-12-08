import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDnsPolicyArgsAlternativeNameServerConfigTargetNameServers {
  forwarding_path?: string;
  ipv4_address: string;
}

export interface GoogleDnsPolicyArgsAlternativeNameServerConfig {
  target_name_servers: GoogleDnsPolicyArgsAlternativeNameServerConfigTargetNameServers[];
}

export interface GoogleDnsPolicyArgsNetworks {
  network_url: string;
}

export interface GoogleDnsPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDnsPolicyArgs {
  description?: string;
  enable_inbound_forwarding?: boolean;
  enable_logging?: boolean;
  name: string;
  alternative_name_server_config?: GoogleDnsPolicyArgsAlternativeNameServerConfig;
  networks?: GoogleDnsPolicyArgsNetworks[];
  timeouts?: GoogleDnsPolicyArgsTimeouts;
}

export class google_dns_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDnsPolicyArgs) {
    const meta = {alternative_name_server_config:{isBlock:true,target_name_servers:{isBlock:true}},networks:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dns_policy", resourceName);
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
}
