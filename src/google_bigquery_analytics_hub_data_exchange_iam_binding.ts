import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryAnalyticsHubDataExchangeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigqueryAnalyticsHubDataExchangeIamBindingArgs {
  data_exchange_id: string;
  members: string[];
  role: string;
  condition?: GoogleBigqueryAnalyticsHubDataExchangeIamBindingArgsCondition;
}

export class google_bigquery_analytics_hub_data_exchange_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryAnalyticsHubDataExchangeIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_analytics_hub_data_exchange_iam_binding", resourceName);
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
