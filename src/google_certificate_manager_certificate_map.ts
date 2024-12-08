import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCertificateManagerCertificateMapArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCertificateManagerCertificateMapArgs {
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  timeouts?: GoogleCertificateManagerCertificateMapArgsTimeouts;
}

export class google_certificate_manager_certificate_map extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCertificateManagerCertificateMapArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_certificate_manager_certificate_map", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get gclb_targets(): string {
    return `${this.resourceType}.${this.resourceName}.gclb_targets`;
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

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
