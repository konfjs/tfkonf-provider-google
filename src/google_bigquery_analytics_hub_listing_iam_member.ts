import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryAnalyticsHubListingIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigqueryAnalyticsHubListingIamMemberArgs {
  data_exchange_id: string;
  listing_id: string;
  member: string;
  role: string;
  condition?: GoogleBigqueryAnalyticsHubListingIamMemberArgsCondition;
}

export class google_bigquery_analytics_hub_listing_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryAnalyticsHubListingIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_analytics_hub_listing_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
