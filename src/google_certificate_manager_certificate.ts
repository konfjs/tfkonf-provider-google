import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCertificateManagerCertificateArgsManaged {
  dns_authorizations?: string[];
  domains?: string[];
  issuance_config?: string;
}

export interface GoogleCertificateManagerCertificateArgsSelfManaged {
  certificate_pem?: string;
  pem_certificate?: string;
  pem_private_key?: string;
  private_key_pem?: string;
}

export interface GoogleCertificateManagerCertificateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCertificateManagerCertificateArgs {
  description?: string;
  labels?: { [key: string]: string };
  location?: string;
  name: string;
  scope?: string;
  managed?: GoogleCertificateManagerCertificateArgsManaged;
  self_managed?: GoogleCertificateManagerCertificateArgsSelfManaged;
  timeouts?: GoogleCertificateManagerCertificateArgsTimeouts;
}

export class google_certificate_manager_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCertificateManagerCertificateArgs) {
    const meta = {managed:{isBlock:true},self_managed:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_certificate_manager_certificate", resourceName);
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

  get san_dnsnames(): string {
    return `${this.resourceType}.${this.resourceName}.san_dnsnames`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
