import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivatecaCertificateTemplateArgsIdentityConstraintsCelExpression {
  description?: string;
  expression?: string;
  location?: string;
  title?: string;
}

export interface GooglePrivatecaCertificateTemplateArgsIdentityConstraints {
  allow_subject_alt_names_passthrough: boolean;
  allow_subject_passthrough: boolean;
  cel_expression?: GooglePrivatecaCertificateTemplateArgsIdentityConstraintsCelExpression;
}

export interface GooglePrivatecaCertificateTemplateArgsPassthroughExtensionsAdditionalExtensions {
  object_id_path: number[];
}

export interface GooglePrivatecaCertificateTemplateArgsPassthroughExtensions {
  known_extensions?: string[];
  additional_extensions?: GooglePrivatecaCertificateTemplateArgsPassthroughExtensionsAdditionalExtensions[];
}

export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesAdditionalExtensionsObjectId {
  object_id_path: number[];
}

export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesAdditionalExtensions {
  critical?: boolean;
  value: string;
  object_id: GooglePrivatecaCertificateTemplateArgsPredefinedValuesAdditionalExtensionsObjectId;
}

export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesCaOptions {
  is_ca?: boolean;
  max_issuer_path_length?: number;
}

export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageBaseKeyUsage {
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

export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageExtendedKeyUsage {
  client_auth?: boolean;
  code_signing?: boolean;
  email_protection?: boolean;
  ocsp_signing?: boolean;
  server_auth?: boolean;
  time_stamping?: boolean;
}

export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageUnknownExtendedKeyUsages {
  object_id_path: number[];
}

export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsage {
  base_key_usage?: GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageBaseKeyUsage;
  extended_key_usage?: GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageExtendedKeyUsage;
  unknown_extended_key_usages?: GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageUnknownExtendedKeyUsages[];
}

export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesPolicyIds {
  object_id_path: number[];
}

export interface GooglePrivatecaCertificateTemplateArgsPredefinedValues {
  aia_ocsp_servers?: string[];
  additional_extensions?: GooglePrivatecaCertificateTemplateArgsPredefinedValuesAdditionalExtensions[];
  ca_options?: GooglePrivatecaCertificateTemplateArgsPredefinedValuesCaOptions;
  key_usage?: GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsage;
  policy_ids?: GooglePrivatecaCertificateTemplateArgsPredefinedValuesPolicyIds[];
}

export interface GooglePrivatecaCertificateTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GooglePrivatecaCertificateTemplateArgs {
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  maximum_lifetime?: string;
  name: string;
  identity_constraints?: GooglePrivatecaCertificateTemplateArgsIdentityConstraints;
  passthrough_extensions?: GooglePrivatecaCertificateTemplateArgsPassthroughExtensions;
  predefined_values?: GooglePrivatecaCertificateTemplateArgsPredefinedValues;
  timeouts?: GooglePrivatecaCertificateTemplateArgsTimeouts;
}

export class google_privateca_certificate_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GooglePrivatecaCertificateTemplateArgs) {
    const meta = {identity_constraints:{isBlock:true,cel_expression:{isBlock:true}},passthrough_extensions:{isBlock:true,additional_extensions:{isBlock:true}},predefined_values:{isBlock:true,additional_extensions:{isBlock:true,object_id:{isBlock:true}},ca_options:{isBlock:true},key_usage:{isBlock:true,base_key_usage:{isBlock:true},extended_key_usage:{isBlock:true},unknown_extended_key_usages:{isBlock:true}},policy_ids:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_privateca_certificate_template", resourceName);
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
