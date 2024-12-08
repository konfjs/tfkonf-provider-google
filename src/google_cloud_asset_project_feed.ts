import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudAssetProjectFeedArgsCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleCloudAssetProjectFeedArgsFeedOutputConfigPubsubDestination {
  topic: string;
}

export interface GoogleCloudAssetProjectFeedArgsFeedOutputConfig {
  pubsub_destination: GoogleCloudAssetProjectFeedArgsFeedOutputConfigPubsubDestination;
}

export interface GoogleCloudAssetProjectFeedArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudAssetProjectFeedArgs {
  asset_names?: string[];
  asset_types?: string[];
  billing_project?: string;
  content_type?: string;
  feed_id: string;
  condition?: GoogleCloudAssetProjectFeedArgsCondition;
  feed_output_config: GoogleCloudAssetProjectFeedArgsFeedOutputConfig;
  timeouts?: GoogleCloudAssetProjectFeedArgsTimeouts;
}

export class google_cloud_asset_project_feed extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudAssetProjectFeedArgs) {
    const meta = {condition:{isBlock:true},feed_output_config:{isBlock:true,pubsub_destination:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_asset_project_feed", resourceName);
  }

  get feed_id(): string {
    return `${this.resourceType}.${this.resourceName}.feed_id`;
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
}
