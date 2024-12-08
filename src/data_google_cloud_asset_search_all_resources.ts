import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudAssetSearchAllResourcesArgs {
  asset_types?: string[];
  query?: string;
  scope: string;
}

export class data_google_cloud_asset_search_all_resources extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleCloudAssetSearchAllResourcesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloud_asset_search_all_resources", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get results(): string {
    return `data.${this.resourceType}.${this.resourceName}.results`;
  }

  get scope(): string {
    return `data.${this.resourceType}.${this.resourceName}.scope`;
  }
}
