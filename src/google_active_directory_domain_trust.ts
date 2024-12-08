import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleActiveDirectoryDomainTrustArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleActiveDirectoryDomainTrustArgs {
  domain: string;
  selective_authentication?: boolean;
  target_dns_ip_addresses: string[];
  target_domain_name: string;
  trust_direction: string;
  trust_handshake_secret: string;
  trust_type: string;
  timeouts?: GoogleActiveDirectoryDomainTrustArgsTimeouts;
}

export class google_active_directory_domain_trust extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleActiveDirectoryDomainTrustArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_active_directory_domain_trust", resourceName);
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get target_dns_ip_addresses(): string {
    return `${this.resourceType}.${this.resourceName}.target_dns_ip_addresses`;
  }

  get target_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.target_domain_name`;
  }

  get trust_direction(): string {
    return `${this.resourceType}.${this.resourceName}.trust_direction`;
  }

  get trust_handshake_secret(): string {
    return `${this.resourceType}.${this.resourceName}.trust_handshake_secret`;
  }

  get trust_type(): string {
    return `${this.resourceType}.${this.resourceName}.trust_type`;
  }
}
