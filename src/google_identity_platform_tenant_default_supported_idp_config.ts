import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIdentityPlatformTenantDefaultSupportedIdpConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIdentityPlatformTenantDefaultSupportedIdpConfigArgs {
  client_id: string;
  client_secret: string;
  enabled?: boolean;
  idp_id: string;
  tenant: string;
  timeouts?: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigArgsTimeouts;
}

export class google_identity_platform_tenant_default_supported_idp_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_identity_platform_tenant_default_supported_idp_config", resourceName);
  }

  get client_id(): string {
    return `${this.resourceType}.${this.resourceName}.client_id`;
  }

  get client_secret(): string {
    return `${this.resourceType}.${this.resourceName}.client_secret`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get idp_id(): string {
    return `${this.resourceType}.${this.resourceName}.idp_id`;
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
