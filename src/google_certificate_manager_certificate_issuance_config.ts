import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCertificateManagerCertificateIssuanceConfigArgsCertificateAuthorityConfigCertificateAuthorityServiceConfig {
  ca_pool: string;
}

export interface GoogleCertificateManagerCertificateIssuanceConfigArgsCertificateAuthorityConfig {
  certificate_authority_service_config?: GoogleCertificateManagerCertificateIssuanceConfigArgsCertificateAuthorityConfigCertificateAuthorityServiceConfig;
}

export interface GoogleCertificateManagerCertificateIssuanceConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCertificateManagerCertificateIssuanceConfigArgs {
  description?: string;
  key_algorithm: string;
  labels?: { [key: string]: string };
  lifetime: string;
  location?: string;
  name: string;
  rotation_window_percentage: number;
  certificate_authority_config: GoogleCertificateManagerCertificateIssuanceConfigArgsCertificateAuthorityConfig;
  timeouts?: GoogleCertificateManagerCertificateIssuanceConfigArgsTimeouts;
}

export class google_certificate_manager_certificate_issuance_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCertificateManagerCertificateIssuanceConfigArgs) {
    const meta = {certificate_authority_config:{isBlock:true,certificate_authority_service_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_certificate_manager_certificate_issuance_config", resourceName);
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

  get key_algorithm(): string {
    return `${this.resourceType}.${this.resourceName}.key_algorithm`;
  }

  get lifetime(): string {
    return `${this.resourceType}.${this.resourceName}.lifetime`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get rotation_window_percentage(): string {
    return `${this.resourceType}.${this.resourceName}.rotation_window_percentage`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
