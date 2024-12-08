import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIntegrationsAuthConfigArgsClientCertificate {
  encrypted_private_key: string;
  passphrase?: string;
  ssl_certificate: string;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialAuthToken {
  token?: string;
  type?: string;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialJwt {
  jwt_header?: string;
  jwt_payload?: string;
  secret?: string;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2AuthorizationCode {
  auth_endpoint?: string;
  client_id?: string;
  client_secret?: string;
  scope?: string;
  token_endpoint?: string;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue {
  string_value?: string;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey {
  literal_value?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue {
  string_value?: string;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue {
  literal_value?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries {
  key?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey;
  value?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParams {
  entries?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries[];
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentials {
  client_id?: string;
  client_secret?: string;
  request_type?: string;
  scope?: string;
  token_endpoint?: string;
  token_params?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParams;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOidcToken {
  audience?: string;
  service_account_email?: string;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialServiceAccountCredentials {
  scope?: string;
  service_account?: string;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialUsernameAndPassword {
  password?: string;
  username?: string;
}

export interface GoogleIntegrationsAuthConfigArgsDecryptedCredential {
  credential_type: string;
  auth_token?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialAuthToken;
  jwt?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialJwt;
  oauth2_authorization_code?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2AuthorizationCode;
  oauth2_client_credentials?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentials;
  oidc_token?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOidcToken;
  service_account_credentials?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialServiceAccountCredentials;
  username_and_password?: GoogleIntegrationsAuthConfigArgsDecryptedCredentialUsernameAndPassword;
}

export interface GoogleIntegrationsAuthConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIntegrationsAuthConfigArgs {
  description?: string;
  display_name: string;
  expiry_notification_duration?: string[];
  location: string;
  override_valid_time?: string;
  visibility?: string;
  client_certificate?: GoogleIntegrationsAuthConfigArgsClientCertificate;
  decrypted_credential?: GoogleIntegrationsAuthConfigArgsDecryptedCredential;
  timeouts?: GoogleIntegrationsAuthConfigArgsTimeouts;
}

export class google_integrations_auth_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIntegrationsAuthConfigArgs) {
    const meta = {client_certificate:{isBlock:true},decrypted_credential:{isBlock:true,auth_token:{isBlock:true},jwt:{isBlock:true},oauth2_authorization_code:{isBlock:true},oauth2_client_credentials:{isBlock:true,token_params:{isBlock:true,entries:{isBlock:true,key:{isBlock:true,literal_value:{isBlock:true}},value:{isBlock:true,literal_value:{isBlock:true}}}}},oidc_token:{isBlock:true},service_account_credentials:{isBlock:true},username_and_password:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_integrations_auth_config", resourceName);
  }

  get certificate_id(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get creator_email(): string {
    return `${this.resourceType}.${this.resourceName}.creator_email`;
  }

  get credential_type(): string {
    return `${this.resourceType}.${this.resourceName}.credential_type`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get encrypted_credential(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted_credential`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modifier_email(): string {
    return `${this.resourceType}.${this.resourceName}.last_modifier_email`;
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

  get reason(): string {
    return `${this.resourceType}.${this.resourceName}.reason`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get valid_time(): string {
    return `${this.resourceType}.${this.resourceName}.valid_time`;
  }
}
