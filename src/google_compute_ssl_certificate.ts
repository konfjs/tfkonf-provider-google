import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSslCertificateArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeSslCertificateArgs {
  certificate: string;
  description?: string;
  private_key: string;
  timeouts?: GoogleComputeSslCertificateArgsTimeouts;
}

export class google_compute_ssl_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeSslCertificateArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_ssl_certificate", resourceName);
  }

  get certificate(): string {
    return `${this.resourceType}.${this.resourceName}.certificate`;
  }

  get certificate_id(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_id`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get expire_time(): string {
    return `${this.resourceType}.${this.resourceName}.expire_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get private_key(): string {
    return `${this.resourceType}.${this.resourceName}.private_key`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
