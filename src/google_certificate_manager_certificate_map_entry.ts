import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCertificateManagerCertificateMapEntryArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCertificateManagerCertificateMapEntryArgs {
  certificates: string[];
  description?: string;
  hostname?: string;
  labels?: { [key: string]: string };
  map: string;
  matcher?: string;
  name: string;
  timeouts?: GoogleCertificateManagerCertificateMapEntryArgsTimeouts;
}

export class google_certificate_manager_certificate_map_entry extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCertificateManagerCertificateMapEntryArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_certificate_manager_certificate_map_entry", resourceName);
  }

  get certificates(): string {
    return `${this.resourceType}.${this.resourceName}.certificates`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get map(): string {
    return `${this.resourceType}.${this.resourceName}.map`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
