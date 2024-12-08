import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirebaseAppCheckRecaptchaEnterpriseConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirebaseAppCheckRecaptchaEnterpriseConfigArgs {
  app_id: string;
  site_key: string;
  timeouts?: GoogleFirebaseAppCheckRecaptchaEnterpriseConfigArgsTimeouts;
}

export class google_firebase_app_check_recaptcha_enterprise_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFirebaseAppCheckRecaptchaEnterpriseConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firebase_app_check_recaptcha_enterprise_config", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
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

  get site_key(): string {
    return `${this.resourceType}.${this.resourceName}.site_key`;
  }

  get token_ttl(): string {
    return `${this.resourceType}.${this.resourceName}.token_ttl`;
  }
}
