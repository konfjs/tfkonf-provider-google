import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleRecaptchaEnterpriseKeyArgsAndroidSettings {
  allow_all_package_names?: boolean;
  allowed_package_names?: string[];
}

export interface GoogleRecaptchaEnterpriseKeyArgsIosSettings {
  allow_all_bundle_ids?: boolean;
  allowed_bundle_ids?: string[];
}

export interface GoogleRecaptchaEnterpriseKeyArgsTestingOptions {
  testing_score?: number;
}

export interface GoogleRecaptchaEnterpriseKeyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleRecaptchaEnterpriseKeyArgsWafSettings {
  waf_feature: string;
  waf_service: string;
}

export interface GoogleRecaptchaEnterpriseKeyArgsWebSettings {
  allow_all_domains?: boolean;
  allow_amp_traffic?: boolean;
  allowed_domains?: string[];
  integration_type: string;
}

export interface GoogleRecaptchaEnterpriseKeyArgs {
  display_name: string;
  labels?: { [key: string]: string };
  android_settings?: GoogleRecaptchaEnterpriseKeyArgsAndroidSettings;
  ios_settings?: GoogleRecaptchaEnterpriseKeyArgsIosSettings;
  testing_options?: GoogleRecaptchaEnterpriseKeyArgsTestingOptions;
  timeouts?: GoogleRecaptchaEnterpriseKeyArgsTimeouts;
  waf_settings?: GoogleRecaptchaEnterpriseKeyArgsWafSettings;
  web_settings?: GoogleRecaptchaEnterpriseKeyArgsWebSettings;
}

export class google_recaptcha_enterprise_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleRecaptchaEnterpriseKeyArgs) {
    const meta = {android_settings:{isBlock:true},ios_settings:{isBlock:true},testing_options:{isBlock:true},timeouts:{isBlock:true},waf_settings:{isBlock:true},web_settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_recaptcha_enterprise_key", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
