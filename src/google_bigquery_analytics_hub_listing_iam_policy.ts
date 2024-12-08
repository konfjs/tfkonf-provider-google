import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryAnalyticsHubListingIamPolicyArgs {
  data_exchange_id: string;
  listing_id: string;
  policy_data: string;
}

export class google_bigquery_analytics_hub_listing_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryAnalyticsHubListingIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_bigquery_analytics_hub_listing_iam_policy", resourceName);
  }

  get data_exchange_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_exchange_id`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get listing_id(): string {
    return `${this.resourceType}.${this.resourceName}.listing_id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
