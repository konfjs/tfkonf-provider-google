import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirebaseAppCheckRecaptchaV3ConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirebaseAppCheckRecaptchaV3ConfigArgs {
  app_id: string;
  site_secret: string;
  timeouts?: GoogleFirebaseAppCheckRecaptchaV3ConfigArgsTimeouts;
}

export class google_firebase_app_check_recaptcha_v3_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFirebaseAppCheckRecaptchaV3ConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firebase_app_check_recaptcha_v3_config", resourceName);
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

  get site_secret(): string {
    return `${this.resourceType}.${this.resourceName}.site_secret`;
  }

  get site_secret_set(): string {
    return `${this.resourceType}.${this.resourceName}.site_secret_set`;
  }

  get token_ttl(): string {
    return `${this.resourceType}.${this.resourceName}.token_ttl`;
  }
}
