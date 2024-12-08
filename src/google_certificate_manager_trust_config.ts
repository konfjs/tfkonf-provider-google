import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCertificateManagerTrustConfigArgsAllowlistedCertificates {
  pem_certificate: string;
}

export interface GoogleCertificateManagerTrustConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCertificateManagerTrustConfigArgsTrustStoresIntermediateCas {
  pem_certificate?: string;
}

export interface GoogleCertificateManagerTrustConfigArgsTrustStoresTrustAnchors {
  pem_certificate?: string;
}

export interface GoogleCertificateManagerTrustConfigArgsTrustStores {
  intermediate_cas?: GoogleCertificateManagerTrustConfigArgsTrustStoresIntermediateCas[];
  trust_anchors?: GoogleCertificateManagerTrustConfigArgsTrustStoresTrustAnchors[];
}

export interface GoogleCertificateManagerTrustConfigArgs {
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  allowlisted_certificates?: GoogleCertificateManagerTrustConfigArgsAllowlistedCertificates[];
  timeouts?: GoogleCertificateManagerTrustConfigArgsTimeouts;
  trust_stores?: GoogleCertificateManagerTrustConfigArgsTrustStores[];
}

export class google_certificate_manager_trust_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCertificateManagerTrustConfigArgs) {
    const meta = {allowlisted_certificates:{isBlock:true},timeouts:{isBlock:true},trust_stores:{isBlock:true,intermediate_cas:{isBlock:true},trust_anchors:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "google_certificate_manager_trust_config", resourceName);
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

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
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
