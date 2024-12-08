import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSiteVerificationTokenArgsTimeouts {
  read?: string;
}

export interface DataGoogleSiteVerificationTokenArgs {
  identifier: string;
  type: string;
  verification_method: string;
  timeouts?: DataGoogleSiteVerificationTokenArgsTimeouts;
}

export class data_google_site_verification_token extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSiteVerificationTokenArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "google_site_verification_token", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.identifier`;
  }

  get token(): string {
    return `data.${this.resourceType}.${this.resourceName}.token`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get verification_method(): string {
    return `data.${this.resourceType}.${this.resourceName}.verification_method`;
  }
}
