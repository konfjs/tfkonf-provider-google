import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryAnalyticsHubDataExchangeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigqueryAnalyticsHubDataExchangeIamMemberArgs {
  data_exchange_id: string;
  member: string;
  role: string;
  condition?: GoogleBigqueryAnalyticsHubDataExchangeIamMemberArgsCondition;
}

export class google_bigquery_analytics_hub_data_exchange_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigqueryAnalyticsHubDataExchangeIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_analytics_hub_data_exchange_iam_member", resourceName);
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
