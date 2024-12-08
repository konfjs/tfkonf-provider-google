import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSiteVerificationOwnerArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleSiteVerificationOwnerArgs {
  email: string;
  web_resource_id: string;
  timeouts?: GoogleSiteVerificationOwnerArgsTimeouts;
}

export class google_site_verification_owner extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSiteVerificationOwnerArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_site_verification_owner", resourceName);
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get web_resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.web_resource_id`;
  }
}
