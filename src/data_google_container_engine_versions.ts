import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleContainerEngineVersionsArgs {
  location?: string;
  project?: string;
  version_prefix?: string;
}

export class data_google_container_engine_versions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleContainerEngineVersionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_container_engine_versions", resourceName);
  }

  get default_cluster_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_cluster_version`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get latest_master_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.latest_master_version`;
  }

  get latest_node_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.latest_node_version`;
  }

  get release_channel_default_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.release_channel_default_version`;
  }

  get release_channel_latest_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.release_channel_latest_version`;
  }

  get valid_master_versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_master_versions`;
  }

  get valid_node_versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_node_versions`;
  }
}
