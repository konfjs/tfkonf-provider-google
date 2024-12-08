import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIdentityPlatformConfigArgsBlockingFunctionsForwardInboundCredentials {
  access_token?: boolean;
  id_token?: boolean;
  refresh_token?: boolean;
}

export interface GoogleIdentityPlatformConfigArgsBlockingFunctionsTriggers {
  event_type: string;
  function_uri: string;
}

export interface GoogleIdentityPlatformConfigArgsBlockingFunctions {
  forward_inbound_credentials?: GoogleIdentityPlatformConfigArgsBlockingFunctionsForwardInboundCredentials;
  triggers: GoogleIdentityPlatformConfigArgsBlockingFunctionsTriggers[];
}

export interface GoogleIdentityPlatformConfigArgsClientPermissions {
  disabled_user_deletion?: boolean;
  disabled_user_signup?: boolean;
}

export interface GoogleIdentityPlatformConfigArgsClient {
  permissions?: GoogleIdentityPlatformConfigArgsClientPermissions;
}

export interface GoogleIdentityPlatformConfigArgsMfaProviderConfigsTotpProviderConfig {
  adjacent_intervals?: number;
}

export interface GoogleIdentityPlatformConfigArgsMfaProviderConfigs {
  totp_provider_config?: GoogleIdentityPlatformConfigArgsMfaProviderConfigsTotpProviderConfig;
}

export interface GoogleIdentityPlatformConfigArgsMfa {
  enabled_providers?: string[];
  provider_configs?: GoogleIdentityPlatformConfigArgsMfaProviderConfigs[];
}

export interface GoogleIdentityPlatformConfigArgsMonitoringRequestLogging {
  enabled?: boolean;
}

export interface GoogleIdentityPlatformConfigArgsMonitoring {
  request_logging?: GoogleIdentityPlatformConfigArgsMonitoringRequestLogging;
}

export interface GoogleIdentityPlatformConfigArgsMultiTenant {
  allow_tenants?: boolean;
  default_tenant_location?: string;
}

export interface GoogleIdentityPlatformConfigArgsQuotaSignUpQuotaConfig {
  quota?: number;
  quota_duration?: string;
  start_time?: string;
}

export interface GoogleIdentityPlatformConfigArgsQuota {
  sign_up_quota_config?: GoogleIdentityPlatformConfigArgsQuotaSignUpQuotaConfig;
}

export interface GoogleIdentityPlatformConfigArgsSignInAnonymous {
  enabled: boolean;
}

export interface GoogleIdentityPlatformConfigArgsSignInEmail {
  enabled: boolean;
  password_required?: boolean;
}

export interface GoogleIdentityPlatformConfigArgsSignInPhoneNumber {
  enabled: boolean;
  test_phone_numbers?: { [key: string]: string };
}

export interface GoogleIdentityPlatformConfigArgsSignIn {
  allow_duplicate_emails?: boolean;
  anonymous?: GoogleIdentityPlatformConfigArgsSignInAnonymous;
  email?: GoogleIdentityPlatformConfigArgsSignInEmail;
  phone_number?: GoogleIdentityPlatformConfigArgsSignInPhoneNumber;
}

export interface GoogleIdentityPlatformConfigArgsSmsRegionConfigAllowByDefault {
  disallowed_regions?: string[];
}

export interface GoogleIdentityPlatformConfigArgsSmsRegionConfigAllowlistOnly {
  allowed_regions?: string[];
}

export interface GoogleIdentityPlatformConfigArgsSmsRegionConfig {
  allow_by_default?: GoogleIdentityPlatformConfigArgsSmsRegionConfigAllowByDefault;
  allowlist_only?: GoogleIdentityPlatformConfigArgsSmsRegionConfigAllowlistOnly;
}

export interface GoogleIdentityPlatformConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIdentityPlatformConfigArgs {
  autodelete_anonymous_users?: boolean;
  blocking_functions?: GoogleIdentityPlatformConfigArgsBlockingFunctions;
  client?: GoogleIdentityPlatformConfigArgsClient;
  mfa?: GoogleIdentityPlatformConfigArgsMfa;
  monitoring?: GoogleIdentityPlatformConfigArgsMonitoring;
  multi_tenant?: GoogleIdentityPlatformConfigArgsMultiTenant;
  quota?: GoogleIdentityPlatformConfigArgsQuota;
  sign_in?: GoogleIdentityPlatformConfigArgsSignIn;
  sms_region_config?: GoogleIdentityPlatformConfigArgsSmsRegionConfig;
  timeouts?: GoogleIdentityPlatformConfigArgsTimeouts;
}

export class google_identity_platform_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIdentityPlatformConfigArgs) {
    const meta = {blocking_functions:{isBlock:true,forward_inbound_credentials:{isBlock:true},triggers:{isBlock:true}},client:{isBlock:true,permissions:{isBlock:true}},mfa:{isBlock:true,provider_configs:{isBlock:true,totp_provider_config:{isBlock:true}}},monitoring:{isBlock:true,request_logging:{isBlock:true}},multi_tenant:{isBlock:true},quota:{isBlock:true,sign_up_quota_config:{isBlock:true}},sign_in:{isBlock:true,anonymous:{isBlock:true},email:{isBlock:true},phone_number:{isBlock:true}},sms_region_config:{isBlock:true,allow_by_default:{isBlock:true},allowlist_only:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_identity_platform_config", resourceName);
  }

  get authorized_domains(): string {
    return `${this.resourceType}.${this.resourceName}.authorized_domains`;
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
