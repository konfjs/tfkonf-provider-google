import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryAnalyticsHubListingArgsBigqueryDatasetSelectedResources {
  table?: string;
}

export interface GoogleBigqueryAnalyticsHubListingArgsBigqueryDataset {
  dataset: string;
  selected_resources?: GoogleBigqueryAnalyticsHubListingArgsBigqueryDatasetSelectedResources[];
}

export interface GoogleBigqueryAnalyticsHubListingArgsDataProvider {
  name: string;
  primary_contact?: string;
}

export interface GoogleBigqueryAnalyticsHubListingArgsPublisher {
  name: string;
  primary_contact?: string;
}

export interface GoogleBigqueryAnalyticsHubListingArgsRestrictedExportConfig {
  enabled?: boolean;
  restrict_query_result?: boolean;
}

export interface GoogleBigqueryAnalyticsHubListingArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryAnalyticsHubListingArgs {
  categories?: string[];
  data_exchange_id: string;
  description?: string;
  display_name: string;
  documentation?: string;
  icon?: string;
  listing_id: string;
  location: string;
  primary_contact?: string;
  request_access?: string;
  bigquery_dataset: GoogleBigqueryAnalyticsHubListingArgsBigqueryDataset;
  data_provider?: GoogleBigqueryAnalyticsHubListingArgsDataProvider;
  publisher?: GoogleBigqueryAnalyticsHubListingArgsPublisher;
  restricted_export_config?: GoogleBigqueryAnalyticsHubListingArgsRestrictedExportConfig;
  timeouts?: GoogleBigqueryAnalyticsHubListingArgsTimeouts;
}

export class google_bigquery_analytics_hub_listing extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryAnalyticsHubListingArgs) {
    const meta = {bigquery_dataset:{isBlock:true,selected_resources:{isBlock:true}},data_provider:{isBlock:true},publisher:{isBlock:true},restricted_export_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_analytics_hub_listing", resourceName);
  }

  get data_exchange_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_exchange_id`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
