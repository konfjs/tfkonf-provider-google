import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudQuotasQuotaInfoArgs {
  parent: string;
  quota_id: string;
  service: string;
}

export class data_google_cloud_quotas_quota_info extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleCloudQuotasQuotaInfoArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloud_quotas_quota_info", resourceName);
  }

  get container_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.container_type`;
  }

  get dimensions(): string {
    return `data.${this.resourceType}.${this.resourceName}.dimensions`;
  }

  get dimensions_infos(): string {
    return `data.${this.resourceType}.${this.resourceName}.dimensions_infos`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get is_concurrent(): string {
    return `data.${this.resourceType}.${this.resourceName}.is_concurrent`;
  }

  get is_fixed(): string {
    return `data.${this.resourceType}.${this.resourceName}.is_fixed`;
  }

  get is_precise(): string {
    return `data.${this.resourceType}.${this.resourceName}.is_precise`;
  }

  get metric(): string {
    return `data.${this.resourceType}.${this.resourceName}.metric`;
  }

  get metric_display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.metric_display_name`;
  }

  get metric_unit(): string {
    return `data.${this.resourceType}.${this.resourceName}.metric_unit`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get quota_display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.quota_display_name`;
  }

  get quota_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.quota_id`;
  }

  get quota_increase_eligibility(): string {
    return `data.${this.resourceType}.${this.resourceName}.quota_increase_eligibility`;
  }

  get refresh_interval(): string {
    return `data.${this.resourceType}.${this.resourceName}.refresh_interval`;
  }

  get service(): string {
    return `data.${this.resourceType}.${this.resourceName}.service`;
  }

  get service_request_quota_uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_request_quota_uri`;
  }
}
