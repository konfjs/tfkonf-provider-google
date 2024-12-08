import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeManagedSslCertificateArgsManaged {
  domains: string[];
}

export interface GoogleComputeManagedSslCertificateArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeManagedSslCertificateArgs {
  description?: string;
  name?: string;
  type?: string;
  managed?: GoogleComputeManagedSslCertificateArgsManaged;
  timeouts?: GoogleComputeManagedSslCertificateArgsTimeouts;
}

export class google_compute_managed_ssl_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeManagedSslCertificateArgs) {
    const meta = {managed:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_managed_ssl_certificate", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get subject_alternative_names(): string {
    return `${this.resourceType}.${this.resourceName}.subject_alternative_names`;
  }
}
