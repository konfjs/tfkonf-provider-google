import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapSettingsArgsAccessSettingsAllowedDomainsSettings {
  domains?: string[];
  enable?: boolean;
}

export interface GoogleIapSettingsArgsAccessSettingsCorsSettings {
  allow_http_options?: boolean;
}

export interface GoogleIapSettingsArgsAccessSettingsGcipSettings {
  login_page_uri?: string;
  tenant_ids?: string[];
}

export interface GoogleIapSettingsArgsAccessSettingsOauthSettings {
  login_hint?: string;
  programmatic_clients?: string[];
}

export interface GoogleIapSettingsArgsAccessSettingsReauthSettings {
  max_age: string;
  method: string;
  policy_type: string;
}

export interface GoogleIapSettingsArgsAccessSettingsWorkforceIdentitySettingsOauth2 {
  client_id?: string;
  client_secret?: string;
}

export interface GoogleIapSettingsArgsAccessSettingsWorkforceIdentitySettings {
  workforce_pools?: string[];
  oauth2?: GoogleIapSettingsArgsAccessSettingsWorkforceIdentitySettingsOauth2;
}

export interface GoogleIapSettingsArgsAccessSettings {
  identity_sources?: string[];
  allowed_domains_settings?: GoogleIapSettingsArgsAccessSettingsAllowedDomainsSettings;
  cors_settings?: GoogleIapSettingsArgsAccessSettingsCorsSettings;
  gcip_settings?: GoogleIapSettingsArgsAccessSettingsGcipSettings;
  oauth_settings?: GoogleIapSettingsArgsAccessSettingsOauthSettings;
  reauth_settings?: GoogleIapSettingsArgsAccessSettingsReauthSettings;
  workforce_identity_settings?: GoogleIapSettingsArgsAccessSettingsWorkforceIdentitySettings;
}

export interface GoogleIapSettingsArgsApplicationSettingsAccessDeniedPageSettings {
  access_denied_page_uri?: string;
  generate_troubleshooting_uri?: boolean;
  remediation_token_generation_enabled?: boolean;
}

export interface GoogleIapSettingsArgsApplicationSettingsAttributePropagationSettings {
  enable?: boolean;
  expression?: string;
  output_credentials?: string[];
}

export interface GoogleIapSettingsArgsApplicationSettingsCsmSettings {
  rctoken_aud?: string;
}

export interface GoogleIapSettingsArgsApplicationSettings {
  cookie_domain?: string;
  access_denied_page_settings?: GoogleIapSettingsArgsApplicationSettingsAccessDeniedPageSettings;
  attribute_propagation_settings?: GoogleIapSettingsArgsApplicationSettingsAttributePropagationSettings;
  csm_settings?: GoogleIapSettingsArgsApplicationSettingsCsmSettings;
}

export interface GoogleIapSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIapSettingsArgs {
  name: string;
  access_settings?: GoogleIapSettingsArgsAccessSettings;
  application_settings?: GoogleIapSettingsArgsApplicationSettings;
  timeouts?: GoogleIapSettingsArgsTimeouts;
}

export class google_iap_settings extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapSettingsArgs) {
    const meta = {access_settings:{isBlock:true,allowed_domains_settings:{isBlock:true},cors_settings:{isBlock:true},gcip_settings:{isBlock:true},oauth_settings:{isBlock:true},reauth_settings:{isBlock:true},workforce_identity_settings:{isBlock:true,oauth2:{isBlock:true}}},application_settings:{isBlock:true,access_denied_page_settings:{isBlock:true},attribute_propagation_settings:{isBlock:true},csm_settings:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_settings", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
