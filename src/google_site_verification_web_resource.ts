import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSiteVerificationWebResourceArgsSite {
  identifier: string;
  type: string;
}

export interface GoogleSiteVerificationWebResourceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleSiteVerificationWebResourceArgs {
  verification_method: string;
  site: GoogleSiteVerificationWebResourceArgsSite;
  timeouts?: GoogleSiteVerificationWebResourceArgsTimeouts;
}

export class google_site_verification_web_resource extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSiteVerificationWebResourceArgs) {
    const meta = {site:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_site_verification_web_resource", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get owners(): string {
    return `${this.resourceType}.${this.resourceName}.owners`;
  }

  get verification_method(): string {
    return `${this.resourceType}.${this.resourceName}.verification_method`;
  }

  get web_resource_id(): string {
    return `${this.resourceType}.${this.resourceName}.web_resource_id`;
  }
}
