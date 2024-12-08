import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBigqueryTableIamPolicyArgs {
  dataset_id: string;
  table_id: string;
}

export class data_google_bigquery_table_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleBigqueryTableIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_bigquery_table_iam_policy", resourceName);
  }

  get dataset_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.dataset_id`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get table_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.table_id`;
  }
}