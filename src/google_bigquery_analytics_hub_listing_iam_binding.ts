import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryAnalyticsHubListingIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigqueryAnalyticsHubListingIamBindingArgs {
  data_exchange_id: string;
  listing_id: string;
  members: string[];
  role: string;
  condition?: GoogleBigqueryAnalyticsHubListingIamBindingArgsCondition;
}

export class google_bigquery_analytics_hub_listing_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryAnalyticsHubListingIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_analytics_hub_listing_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
