import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivatecaCertificateArgsConfigPublicKey {
  format: string;
  key?: string;
}

export interface GooglePrivatecaCertificateArgsConfigSubjectConfigSubject {
  common_name: string;
  country_code?: string;
  locality?: string;
  organization: string;
  organizational_unit?: string;
  postal_code?: string;
  province?: string;
  street_address?: string;
}

export interface GooglePrivatecaCertificateArgsConfigSubjectConfigSubjectAltName {
  dns_names?: string[];
  email_addresses?: string[];
  ip_addresses?: string[];
  uris?: string[];
}

export interface GooglePrivatecaCertificateArgsConfigSubjectConfig {
  subject: GooglePrivatecaCertificateArgsConfigSubjectConfigSubject;
  subject_alt_name?: GooglePrivatecaCertificateArgsConfigSubjectConfigSubjectAltName;
}

export interface GooglePrivatecaCertificateArgsConfigSubjectKeyId {
  key_id?: string;
}

export interface GooglePrivatecaCertificateArgsConfigX509ConfigAdditionalExtensionsObjectId {
  object_id_path: number[];
}

export interface GooglePrivatecaCertificateArgsConfigX509ConfigAdditionalExtensions {
  critical: boolean;
  value: string;
  object_id: GooglePrivatecaCertificateArgsConfigX509ConfigAdditionalExtensionsObjectId;
}

export interface GooglePrivatecaCertificateArgsConfigX509ConfigCaOptions {
  is_ca?: boolean;
  max_issuer_path_length?: number;
  non_ca?: boolean;
  zero_max_issuer_path_length?: boolean;
}

export interface GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageBaseKeyUsage {
  cert_sign?: boolean;
  content_commitment?: boolean;
  crl_sign?: boolean;
  data_encipherment?: boolean;
  decipher_only?: boolean;
  digital_signature?: boolean;
  encipher_only?: boolean;
  key_agreement?: boolean;
  key_encipherment?: boolean;
}

export interface GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageExtendedKeyUsage {
  client_auth?: boolean;
  code_signing?: boolean;
  email_protection?: boolean;
  ocsp_signing?: boolean;
  server_auth?: boolean;
  time_stamping?: boolean;
}

export interface GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageUnknownExtendedKeyUsages {
  object_id_path: number[];
}

export interface GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsage {
  base_key_usage: GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageBaseKeyUsage;
  extended_key_usage: GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageExtendedKeyUsage;
  unknown_extended_key_usages?: GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[];
}

export interface GooglePrivatecaCertificateArgsConfigX509ConfigNameConstraints {
  critical: boolean;
  excluded_dns_names?: string[];
  excluded_email_addresses?: string[];
  excluded_ip_ranges?: string[];
  excluded_uris?: string[];
  permitted_dns_names?: string[];
  permitted_email_addresses?: string[];
  permitted_ip_ranges?: string[];
  permitted_uris?: string[];
}

export interface GooglePrivatecaCertificateArgsConfigX509ConfigPolicyIds {
  object_id_path: number[];
}

export interface GooglePrivatecaCertificateArgsConfigX509Config {
  aia_ocsp_servers?: string[];
  additional_extensions?: GooglePrivatecaCertificateArgsConfigX509ConfigAdditionalExtensions[];
  ca_options?: GooglePrivatecaCertificateArgsConfigX509ConfigCaOptions;
  key_usage: GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsage;
  name_constraints?: GooglePrivatecaCertificateArgsConfigX509ConfigNameConstraints;
  policy_ids?: GooglePrivatecaCertificateArgsConfigX509ConfigPolicyIds[];
}

export interface GooglePrivatecaCertificateArgsConfig {
  public_key: GooglePrivatecaCertificateArgsConfigPublicKey;
  subject_config: GooglePrivatecaCertificateArgsConfigSubjectConfig;
  subject_key_id?: GooglePrivatecaCertificateArgsConfigSubjectKeyId;
  x509_config: GooglePrivatecaCertificateArgsConfigX509Config;
}

export interface GooglePrivatecaCertificateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GooglePrivatecaCertificateArgs {
  certificate_authority?: string;
  certificate_template?: string;
  labels?: { [key: string]: string };
  lifetime?: string;
  location: string;
  name: string;
  pem_csr?: string;
  pool: string;
  config?: GooglePrivatecaCertificateArgsConfig;
  timeouts?: GooglePrivatecaCertificateArgsTimeouts;
}

export class google_privateca_certificate extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GooglePrivatecaCertificateArgs) {
    const meta = {config:{isBlock:true,public_key:{isBlock:true},subject_config:{isBlock:true,subject:{isBlock:true},subject_alt_name:{isBlock:true}},subject_key_id:{isBlock:true},x509_config:{isBlock:true,additional_extensions:{isBlock:true,object_id:{isBlock:true}},ca_options:{isBlock:true},key_usage:{isBlock:true,base_key_usage:{isBlock:true},extended_key_usage:{isBlock:true},unknown_extended_key_usages:{isBlock:true}},name_constraints:{isBlock:true},policy_ids:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_privateca_certificate", resourceName);
  }

  get certificate_description(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_description`;
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

  get issuer_certificate_authority(): string {
    return `${this.resourceType}.${this.resourceName}.issuer_certificate_authority`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get pem_certificate(): string {
    return `${this.resourceType}.${this.resourceName}.pem_certificate`;
  }

  get pem_certificate_chain(): string {
    return `${this.resourceType}.${this.resourceName}.pem_certificate_chain`;
  }

  get pool(): string {
    return `${this.resourceType}.${this.resourceName}.pool`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get revocation_details(): string {
    return `${this.resourceType}.${this.resourceName}.revocation_details`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
