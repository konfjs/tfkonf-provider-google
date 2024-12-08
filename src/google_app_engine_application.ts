import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAppEngineApplicationArgsFeatureSettings {
  split_health_checks: boolean;
}

export interface GoogleAppEngineApplicationArgsIap {
  enabled?: boolean;
  oauth2_client_id: string;
  oauth2_client_secret: string;
}

export interface GoogleAppEngineApplicationArgsTimeouts {
  create?: string;
  update?: string;
}

export interface GoogleAppEngineApplicationArgs {
  location_id: string;
  feature_settings?: GoogleAppEngineApplicationArgsFeatureSettings;
  iap?: GoogleAppEngineApplicationArgsIap;
  timeouts?: GoogleAppEngineApplicationArgsTimeouts;
}

export class google_app_engine_application extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAppEngineApplicationArgs) {
    const meta = {feature_settings:{isBlock:true},iap:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_app_engine_application", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
  }

  get auth_domain(): string {
    return `${this.resourceType}.${this.resourceName}.auth_domain`;
  }

  get code_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.code_bucket`;
  }

  get database_type(): string {
    return `${this.resourceType}.${this.resourceName}.database_type`;
  }

  get default_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.default_bucket`;
  }

  get default_hostname(): string {
    return `${this.resourceType}.${this.resourceName}.default_hostname`;
  }

  get gcr_domain(): string {
    return `${this.resourceType}.${this.resourceName}.gcr_domain`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location_id(): string {
    return `${this.resourceType}.${this.resourceName}.location_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get serving_status(): string {
    return `${this.resourceType}.${this.resourceName}.serving_status`;
  }

  get url_dispatch_rule(): string {
    return `${this.resourceType}.${this.resourceName}.url_dispatch_rule`;
  }
}
