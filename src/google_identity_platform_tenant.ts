import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIdentityPlatformTenantArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIdentityPlatformTenantArgs {
  allow_password_signup?: boolean;
  disable_auth?: boolean;
  display_name: string;
  enable_email_link_signin?: boolean;
  timeouts?: GoogleIdentityPlatformTenantArgsTimeouts;
}

export class google_identity_platform_tenant extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformTenantArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_identity_platform_tenant", resourceName);
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
