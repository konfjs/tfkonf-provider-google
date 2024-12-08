import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkSecuritySecurityProfileGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkSecuritySecurityProfileGroupArgs {
  description?: string;
  labels?: { [key: string]: string };
  location?: string;
  name: string;
  parent?: string;
  threat_prevention_profile?: string;
  timeouts?: GoogleNetworkSecuritySecurityProfileGroupArgsTimeouts;
}

export class google_network_security_security_profile_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetworkSecuritySecurityProfileGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_security_security_profile_group", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
