import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudQuotasQuotaPreferenceArgsQuotaConfig {
  annotations?: { [key: string]: string };
  preferred_value: string;
}

export interface GoogleCloudQuotasQuotaPreferenceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudQuotasQuotaPreferenceArgs {
  contact_email?: string;
  ignore_safety_checks?: string;
  justification?: string;
  quota_config: GoogleCloudQuotasQuotaPreferenceArgsQuotaConfig;
  timeouts?: GoogleCloudQuotasQuotaPreferenceArgsTimeouts;
}

export class google_cloud_quotas_quota_preference extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudQuotasQuotaPreferenceArgs) {
    const meta = {quota_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_quotas_quota_preference", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get dimensions(): string {
    return `${this.resourceType}.${this.resourceName}.dimensions`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get quota_id(): string {
    return `${this.resourceType}.${this.resourceName}.quota_id`;
  }

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
