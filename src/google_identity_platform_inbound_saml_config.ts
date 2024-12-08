import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIdentityPlatformInboundSamlConfigArgsIdpConfigIdpCertificates {
  x509_certificate?: string;
}

export interface GoogleIdentityPlatformInboundSamlConfigArgsIdpConfig {
  idp_entity_id: string;
  sign_request?: boolean;
  sso_url: string;
  idp_certificates: GoogleIdentityPlatformInboundSamlConfigArgsIdpConfigIdpCertificates[];
}

export interface GoogleIdentityPlatformInboundSamlConfigArgsSpConfig {
  callback_uri?: string;
  sp_entity_id?: string;
}

export interface GoogleIdentityPlatformInboundSamlConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIdentityPlatformInboundSamlConfigArgs {
  display_name: string;
  enabled?: boolean;
  name: string;
  idp_config: GoogleIdentityPlatformInboundSamlConfigArgsIdpConfig;
  sp_config: GoogleIdentityPlatformInboundSamlConfigArgsSpConfig;
  timeouts?: GoogleIdentityPlatformInboundSamlConfigArgsTimeouts;
}

export class google_identity_platform_inbound_saml_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIdentityPlatformInboundSamlConfigArgs) {
    const meta = {idp_config:{isBlock:true,idp_certificates:{isBlock:true}},sp_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_identity_platform_inbound_saml_config", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
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
}
