import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfigDcrExchangeConfig {
}

export interface GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfigDefaultExchangeConfig {
}

export interface GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfig {
  dcr_exchange_config?: GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfigDcrExchangeConfig;
  default_exchange_config?: GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfigDefaultExchangeConfig;
}

export interface GoogleBigqueryAnalyticsHubDataExchangeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryAnalyticsHubDataExchangeArgs {
  data_exchange_id: string;
  description?: string;
  display_name: string;
  documentation?: string;
  icon?: string;
  location: string;
  primary_contact?: string;
  sharing_environment_config?: GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfig;
  timeouts?: GoogleBigqueryAnalyticsHubDataExchangeArgsTimeouts;
}

export class google_bigquery_analytics_hub_data_exchange extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigqueryAnalyticsHubDataExchangeArgs) {
    const meta = {sharing_environment_config:{isBlock:true,dcr_exchange_config:{isBlock:true},default_exchange_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_analytics_hub_data_exchange", resourceName);
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

  get listing_count(): string {
    return `${this.resourceType}.${this.resourceName}.listing_count`;
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
