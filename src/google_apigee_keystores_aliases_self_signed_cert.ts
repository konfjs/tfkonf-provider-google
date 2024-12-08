import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeKeystoresAliasesSelfSignedCertArgsSubject {
  common_name?: string;
  country_code?: string;
  email?: string;
  locality?: string;
  org?: string;
  org_unit?: string;
  state?: string;
}

export interface GoogleApigeeKeystoresAliasesSelfSignedCertArgsSubjectAlternativeDnsNames {
  subject_alternative_name?: string;
}

export interface GoogleApigeeKeystoresAliasesSelfSignedCertArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApigeeKeystoresAliasesSelfSignedCertArgs {
  alias: string;
  cert_validity_in_days?: number;
  environment: string;
  key_size?: string;
  keystore: string;
  org_id: string;
  sig_alg: string;
  subject: GoogleApigeeKeystoresAliasesSelfSignedCertArgsSubject;
  subject_alternative_dns_names?: GoogleApigeeKeystoresAliasesSelfSignedCertArgsSubjectAlternativeDnsNames;
  timeouts?: GoogleApigeeKeystoresAliasesSelfSignedCertArgsTimeouts;
}

export class google_apigee_keystores_aliases_self_signed_cert extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApigeeKeystoresAliasesSelfSignedCertArgs) {
    const meta = {subject:{isBlock:true},subject_alternative_dns_names:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_keystores_aliases_self_signed_cert", resourceName);
  }

  get alias(): string {
    return `${this.resourceType}.${this.resourceName}.alias`;
  }

  get certs_info(): string {
    return `${this.resourceType}.${this.resourceName}.certs_info`;
  }

  get environment(): string {
    return `${this.resourceType}.${this.resourceName}.environment`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get keystore(): string {
    return `${this.resourceType}.${this.resourceName}.keystore`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get sig_alg(): string {
    return `${this.resourceType}.${this.resourceName}.sig_alg`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
