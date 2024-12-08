import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCertificateManagerDnsAuthorizationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCertificateManagerDnsAuthorizationArgs {
  description?: string;
  domain: string;
  labels?: { [key: string]: string };
  location?: string;
  name: string;
  timeouts?: GoogleCertificateManagerDnsAuthorizationArgsTimeouts;
}

export class google_certificate_manager_dns_authorization extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCertificateManagerDnsAuthorizationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_certificate_manager_dns_authorization", resourceName);
  }

  get dns_resource_record(): string {
    return `${this.resourceType}.${this.resourceName}.dns_resource_record`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
