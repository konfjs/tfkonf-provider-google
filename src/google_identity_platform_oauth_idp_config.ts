import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIdentityPlatformOauthIdpConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIdentityPlatformOauthIdpConfigArgs {
  client_id: string;
  client_secret?: string;
  display_name?: string;
  enabled?: boolean;
  issuer: string;
  name: string;
  timeouts?: GoogleIdentityPlatformOauthIdpConfigArgsTimeouts;
}

export class google_identity_platform_oauth_idp_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIdentityPlatformOauthIdpConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_identity_platform_oauth_idp_config", resourceName);
  }

  get client_id(): string {
    return `${this.resourceType}.${this.resourceName}.client_id`;
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
}
