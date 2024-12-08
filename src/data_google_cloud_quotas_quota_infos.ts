import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudQuotasQuotaInfosArgs {
  parent: string;
  service: string;
}

export class data_google_cloud_quotas_quota_infos extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleCloudQuotasQuotaInfosArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloud_quotas_quota_infos", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get quota_infos(): string {
    return `data.${this.resourceType}.${this.resourceName}.quota_infos`;
  }

  get service(): string {
    return `data.${this.resourceType}.${this.resourceName}.service`;
  }
}
