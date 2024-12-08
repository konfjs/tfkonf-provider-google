import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIdentityPlatformTenantOauthIdpConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIdentityPlatformTenantOauthIdpConfigArgs {
  client_id: string;
  client_secret?: string;
  display_name: string;
  enabled?: boolean;
  issuer: string;
  name: string;
  tenant: string;
  timeouts?: GoogleIdentityPlatformTenantOauthIdpConfigArgsTimeouts;
}

export class google_identity_platform_tenant_oauth_idp_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformTenantOauthIdpConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_identity_platform_tenant_oauth_idp_config", resourceName);
  }

  get client_id(): string {
    return `${this.resourceType}.${this.resourceName}.client_id`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get issuer(): string {
    return `${this.resourceType}.${this.resourceName}.issuer`;
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
