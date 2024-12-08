import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudAssetFolderFeedArgsCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleCloudAssetFolderFeedArgsFeedOutputConfigPubsubDestination {
  topic: string;
}

export interface GoogleCloudAssetFolderFeedArgsFeedOutputConfig {
  pubsub_destination: GoogleCloudAssetFolderFeedArgsFeedOutputConfigPubsubDestination;
}

export interface GoogleCloudAssetFolderFeedArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudAssetFolderFeedArgs {
  asset_names?: string[];
  asset_types?: string[];
  billing_project: string;
  content_type?: string;
  feed_id: string;
  folder: string;
  condition?: GoogleCloudAssetFolderFeedArgsCondition;
  feed_output_config: GoogleCloudAssetFolderFeedArgsFeedOutputConfig;
  timeouts?: GoogleCloudAssetFolderFeedArgsTimeouts;
}

export class google_cloud_asset_folder_feed extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudAssetFolderFeedArgs) {
    const meta = {condition:{isBlock:true},feed_output_config:{isBlock:true,pubsub_destination:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_asset_folder_feed", resourceName);
  }

  get billing_project(): string {
    return `${this.resourceType}.${this.resourceName}.billing_project`;
  }

  get feed_id(): string {
    return `${this.resourceType}.${this.resourceName}.feed_id`;
  }

  get folder(): string {
    return `${this.resourceType}.${this.resourceName}.folder`;
  }

  get folder_id(): string {
    return `${this.resourceType}.${this.resourceName}.folder_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
