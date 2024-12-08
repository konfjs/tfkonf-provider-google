import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariableEncryptionKeyValue {
  kms_key_name?: string;
  type: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariableSecretValue {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value?: GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariableEncryptionKeyValue;
  secret_value?: GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariableSecretValue;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2AuthCodeFlowClientSecret {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2AuthCodeFlow {
  auth_uri?: string;
  client_id?: string;
  enable_pkce?: boolean;
  scopes?: string[];
  client_secret?: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2AuthCodeFlowClientSecret;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2ClientCredentialsClientSecret {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2ClientCredentials {
  client_id: string;
  client_secret?: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2ClientCredentialsClientSecret;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearerClientKey {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearerJwtClaims {
  audience?: string;
  issuer?: string;
  subject?: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearer {
  client_key?: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearerClientKey;
  jwt_claims?: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearerJwtClaims;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKeySshClientCert {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKeySshClientCertPass {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKey {
  cert_type?: string;
  username: string;
  ssh_client_cert?: GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKeySshClientCert;
  ssh_client_cert_pass?: GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKeySshClientCertPass;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigUserPasswordPassword {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigUserPassword {
  username: string;
  password?: GoogleIntegrationConnectorsConnectionArgsAuthConfigUserPasswordPassword;
}

export interface GoogleIntegrationConnectorsConnectionArgsAuthConfig {
  auth_key?: string;
  auth_type: string;
  additional_variable?: GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariable[];
  oauth2_auth_code_flow?: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2AuthCodeFlow;
  oauth2_client_credentials?: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2ClientCredentials;
  oauth2_jwt_bearer?: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearer;
  ssh_public_key?: GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKey;
  user_password?: GoogleIntegrationConnectorsConnectionArgsAuthConfigUserPassword;
}

export interface GoogleIntegrationConnectorsConnectionArgsConfigVariableEncryptionKeyValue {
  kms_key_name?: string;
  type: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsConfigVariableSecretValue {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsConfigVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value?: GoogleIntegrationConnectorsConnectionArgsConfigVariableEncryptionKeyValue;
  secret_value?: GoogleIntegrationConnectorsConnectionArgsConfigVariableSecretValue;
}

export interface GoogleIntegrationConnectorsConnectionArgsDestinationConfigDestination {
  host?: string;
  port?: number;
  service_attachment?: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsDestinationConfig {
  key: string;
  destination?: GoogleIntegrationConnectorsConnectionArgsDestinationConfigDestination[];
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariableEncryptionKeyValue {
  kms_key_name?: string;
  type?: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariableSecretValue {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value?: GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariableEncryptionKeyValue;
  secret_value?: GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariableSecretValue;
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue {
  kms_key_name?: string;
  type?: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariableSecretValue {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value?: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue;
  secret_value?: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariableSecretValue;
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigUserPasswordPassword {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigUserPassword {
  username?: string;
  password?: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigUserPasswordPassword;
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfig {
  auth_key?: string;
  auth_type: string;
  additional_variable?: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariable[];
  user_password: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigUserPassword;
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigRegistrationDestinationConfigDestination {
  host?: string;
  port?: number;
  service_attachment?: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigRegistrationDestinationConfig {
  key?: string;
  destination?: GoogleIntegrationConnectorsConnectionArgsEventingConfigRegistrationDestinationConfigDestination[];
}

export interface GoogleIntegrationConnectorsConnectionArgsEventingConfig {
  enrichment_enabled?: boolean;
  additional_variable?: GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariable[];
  auth_config?: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfig;
  registration_destination_config: GoogleIntegrationConnectorsConnectionArgsEventingConfigRegistrationDestinationConfig;
}

export interface GoogleIntegrationConnectorsConnectionArgsLockConfig {
  locked: boolean;
  reason?: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsLogConfig {
  enabled: boolean;
}

export interface GoogleIntegrationConnectorsConnectionArgsNodeConfig {
}

export interface GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariableEncryptionKeyValue {
  kms_key_name?: string;
  type?: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariableSecretValue {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value?: GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariableEncryptionKeyValue;
  secret_value?: GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariableSecretValue;
}

export interface GoogleIntegrationConnectorsConnectionArgsSslConfigClientCertificate {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsSslConfigClientPrivateKey {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsSslConfigClientPrivateKeyPass {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsSslConfigPrivateServerCertificate {
  secret_version: string;
}

export interface GoogleIntegrationConnectorsConnectionArgsSslConfig {
  client_cert_type?: string;
  server_cert_type?: string;
  trust_model?: string;
  type: string;
  use_ssl?: boolean;
  additional_variable?: GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariable[];
  client_certificate?: GoogleIntegrationConnectorsConnectionArgsSslConfigClientCertificate;
  client_private_key?: GoogleIntegrationConnectorsConnectionArgsSslConfigClientPrivateKey;
  client_private_key_pass?: GoogleIntegrationConnectorsConnectionArgsSslConfigClientPrivateKeyPass;
  private_server_certificate?: GoogleIntegrationConnectorsConnectionArgsSslConfigPrivateServerCertificate;
}

export interface GoogleIntegrationConnectorsConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIntegrationConnectorsConnectionArgs {
  connector_version: string;
  description?: string;
  eventing_enablement_type?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  suspended?: boolean;
  auth_config?: GoogleIntegrationConnectorsConnectionArgsAuthConfig;
  config_variable?: GoogleIntegrationConnectorsConnectionArgsConfigVariable[];
  destination_config?: GoogleIntegrationConnectorsConnectionArgsDestinationConfig[];
  eventing_config?: GoogleIntegrationConnectorsConnectionArgsEventingConfig;
  lock_config?: GoogleIntegrationConnectorsConnectionArgsLockConfig;
  log_config?: GoogleIntegrationConnectorsConnectionArgsLogConfig;
  node_config?: GoogleIntegrationConnectorsConnectionArgsNodeConfig;
  ssl_config?: GoogleIntegrationConnectorsConnectionArgsSslConfig;
  timeouts?: GoogleIntegrationConnectorsConnectionArgsTimeouts;
}

export class google_integration_connectors_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIntegrationConnectorsConnectionArgs) {
    const meta = {auth_config:{isBlock:true,additional_variable:{isBlock:true,encryption_key_value:{isBlock:true},secret_value:{isBlock:true}},oauth2_auth_code_flow:{isBlock:true,client_secret:{isBlock:true}},oauth2_client_credentials:{isBlock:true,client_secret:{isBlock:true}},oauth2_jwt_bearer:{isBlock:true,client_key:{isBlock:true},jwt_claims:{isBlock:true}},ssh_public_key:{isBlock:true,ssh_client_cert:{isBlock:true},ssh_client_cert_pass:{isBlock:true}},user_password:{isBlock:true,password:{isBlock:true}}},config_variable:{isBlock:true,encryption_key_value:{isBlock:true},secret_value:{isBlock:true}},destination_config:{isBlock:true,destination:{isBlock:true}},eventing_config:{isBlock:true,additional_variable:{isBlock:true,encryption_key_value:{isBlock:true},secret_value:{isBlock:true}},auth_config:{isBlock:true,additional_variable:{isBlock:true,encryption_key_value:{isBlock:true},secret_value:{isBlock:true}},user_password:{isBlock:true,password:{isBlock:true}}},registration_destination_config:{isBlock:true,destination:{isBlock:true}}},lock_config:{isBlock:true},log_config:{isBlock:true},node_config:{isBlock:true},ssl_config:{isBlock:true,additional_variable:{isBlock:true,encryption_key_value:{isBlock:true},secret_value:{isBlock:true}},client_certificate:{isBlock:true},client_private_key:{isBlock:true},client_private_key_pass:{isBlock:true},private_server_certificate:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_integration_connectors_connection", resourceName);
  }

  get connection_revision(): string {
    return `${this.resourceType}.${this.resourceName}.connection_revision`;
  }

  get connector_version(): string {
    return `${this.resourceType}.${this.resourceName}.connector_version`;
  }

  get connector_version_infra_config(): string {
    return `${this.resourceType}.${this.resourceName}.connector_version_infra_config`;
  }

  get connector_version_launch_stage(): string {
    return `${this.resourceType}.${this.resourceName}.connector_version_launch_stage`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get eventing_runtime_data(): string {
    return `${this.resourceType}.${this.resourceName}.eventing_runtime_data`;
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

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }

  get service_directory(): string {
    return `${this.resourceType}.${this.resourceName}.service_directory`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get subscription_type(): string {
    return `${this.resourceType}.${this.resourceName}.subscription_type`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
