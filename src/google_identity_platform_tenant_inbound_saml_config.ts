import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIdentityPlatformTenantInboundSamlConfigArgsIdpConfigIdpCertificates {
  x509_certificate?: string;
}

export interface GoogleIdentityPlatformTenantInboundSamlConfigArgsIdpConfig {
  idp_entity_id: string;
  sign_request?: boolean;
  sso_url: string;
  idp_certificates: GoogleIdentityPlatformTenantInboundSamlConfigArgsIdpConfigIdpCertificates[];
}

export interface GoogleIdentityPlatformTenantInboundSamlConfigArgsSpConfig {
  callback_uri: string;
  sp_entity_id: string;
}

export interface GoogleIdentityPlatformTenantInboundSamlConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIdentityPlatformTenantInboundSamlConfigArgs {
  display_name: string;
  enabled?: boolean;
  name: string;
  tenant: string;
  idp_config: GoogleIdentityPlatformTenantInboundSamlConfigArgsIdpConfig;
  sp_config: GoogleIdentityPlatformTenantInboundSamlConfigArgsSpConfig;
  timeouts?: GoogleIdentityPlatformTenantInboundSamlConfigArgsTimeouts;
}

export class google_identity_platform_tenant_inbound_saml_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformTenantInboundSamlConfigArgs) {
    const meta = {idp_config:{isBlock:true,idp_certificates:{isBlock:true}},sp_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_identity_platform_tenant_inbound_saml_config", resourceName);
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

  get tenant(): string {
    return `${this.resourceType}.${this.resourceName}.tenant`;
  }
}
