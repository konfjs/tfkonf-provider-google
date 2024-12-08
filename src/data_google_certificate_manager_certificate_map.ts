import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCertificateManagerCertificateMapArgs {
  name: string;
  project?: string;
}

export class data_google_certificate_manager_certificate_map extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleCertificateManagerCertificateMapArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_certificate_manager_certificate_map", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get gclb_targets(): string {
    return `data.${this.resourceType}.${this.resourceName}.gclb_targets`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
