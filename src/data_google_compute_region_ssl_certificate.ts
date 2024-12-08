import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeRegionSslCertificateArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_compute_region_ssl_certificate extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeRegionSslCertificateArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_region_ssl_certificate", resourceName);
  }

  get certificate(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate`;
  }

  get certificate_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_id`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get expire_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.expire_time`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get private_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_key`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }
}
