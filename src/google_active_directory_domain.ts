import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleActiveDirectoryDomainArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleActiveDirectoryDomainArgs {
  admin?: string;
  authorized_networks?: string[];
  deletion_protection?: boolean;
  domain_name: string;
  labels?: { [key: string]: string };
  locations: string[];
  reserved_ip_range: string;
  timeouts?: GoogleActiveDirectoryDomainArgsTimeouts;
}

export class google_active_directory_domain extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleActiveDirectoryDomainArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_active_directory_domain", resourceName);
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get fqdn(): string {
    return `${this.resourceType}.${this.resourceName}.fqdn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get locations(): string {
    return `${this.resourceType}.${this.resourceName}.locations`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get reserved_ip_range(): string {
    return `${this.resourceType}.${this.resourceName}.reserved_ip_range`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
