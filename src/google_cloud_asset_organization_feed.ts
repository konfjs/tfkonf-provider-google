import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudAssetOrganizationFeedArgsCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleCloudAssetOrganizationFeedArgsFeedOutputConfigPubsubDestination {
  topic: string;
}

export interface GoogleCloudAssetOrganizationFeedArgsFeedOutputConfig {
  pubsub_destination: GoogleCloudAssetOrganizationFeedArgsFeedOutputConfigPubsubDestination;
}

export interface GoogleCloudAssetOrganizationFeedArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudAssetOrganizationFeedArgs {
  asset_names?: string[];
  asset_types?: string[];
  billing_project: string;
  content_type?: string;
  feed_id: string;
  org_id: string;
  condition?: GoogleCloudAssetOrganizationFeedArgsCondition;
  feed_output_config: GoogleCloudAssetOrganizationFeedArgsFeedOutputConfig;
  timeouts?: GoogleCloudAssetOrganizationFeedArgsTimeouts;
}

export class google_cloud_asset_organization_feed extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudAssetOrganizationFeedArgs) {
    const meta = {condition:{isBlock:true},feed_output_config:{isBlock:true,pubsub_destination:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_asset_organization_feed", resourceName);
  }

  get billing_project(): string {
    return `${this.resourceType}.${this.resourceName}.billing_project`;
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

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }
}
