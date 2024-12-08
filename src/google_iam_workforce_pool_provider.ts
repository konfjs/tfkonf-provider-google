import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientClientSecretValue {
  plain_text: string;
}

export interface GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientClientSecret {
  value?: GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientClientSecretValue;
}

export interface GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientQueryParameters {
  filter?: string;
}

export interface GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2Client {
  attributes_type: string;
  client_id: string;
  issuer_uri: string;
  client_secret: GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientClientSecret;
  query_parameters?: GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientQueryParameters;
}

export interface GoogleIamWorkforcePoolProviderArgsOidcClientSecretValue {
  plain_text: string;
}

export interface GoogleIamWorkforcePoolProviderArgsOidcClientSecret {
  value?: GoogleIamWorkforcePoolProviderArgsOidcClientSecretValue;
}

export interface GoogleIamWorkforcePoolProviderArgsOidcWebSsoConfig {
  additional_scopes?: string[];
  assertion_claims_behavior: string;
  response_type: string;
}

export interface GoogleIamWorkforcePoolProviderArgsOidc {
  client_id: string;
  issuer_uri: string;
  jwks_json?: string;
  client_secret?: GoogleIamWorkforcePoolProviderArgsOidcClientSecret;
  web_sso_config?: GoogleIamWorkforcePoolProviderArgsOidcWebSsoConfig;
}

export interface GoogleIamWorkforcePoolProviderArgsSaml {
  idp_metadata_xml: string;
}

export interface GoogleIamWorkforcePoolProviderArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIamWorkforcePoolProviderArgs {
  attribute_condition?: string;
  attribute_mapping?: { [key: string]: string };
  description?: string;
  disabled?: boolean;
  display_name?: string;
  location: string;
  provider_id: string;
  workforce_pool_id: string;
  extra_attributes_oauth2_client?: GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2Client;
  oidc?: GoogleIamWorkforcePoolProviderArgsOidc;
  saml?: GoogleIamWorkforcePoolProviderArgsSaml;
  timeouts?: GoogleIamWorkforcePoolProviderArgsTimeouts;
}

export class google_iam_workforce_pool_provider extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIamWorkforcePoolProviderArgs) {
    const meta = {extra_attributes_oauth2_client:{isBlock:true,client_secret:{isBlock:true,value:{isBlock:true}},query_parameters:{isBlock:true}},oidc:{isBlock:true,client_secret:{isBlock:true,value:{isBlock:true}},web_sso_config:{isBlock:true}},saml:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iam_workforce_pool_provider", resourceName);
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

  get provider_id(): string {
    return `${this.resourceType}.${this.resourceName}.provider_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get workforce_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.workforce_pool_id`;
  }
}
