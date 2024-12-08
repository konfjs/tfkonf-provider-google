import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCertificateManagerCertificatesArgs {
  filter?: string;
  region?: string;
}

export class data_google_certificate_manager_certificates extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleCertificateManagerCertificatesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_certificate_manager_certificates", resourceName);
  }

  get certificates(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificates`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
