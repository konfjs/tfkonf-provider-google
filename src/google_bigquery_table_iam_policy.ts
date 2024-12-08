import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryTableIamPolicyArgs {
  dataset_id: string;
  policy_data: string;
  table_id: string;
}

export class google_bigquery_table_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryTableIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_bigquery_table_iam_policy", resourceName);
  }

  get dataset_id(): string {
    return `${this.resourceType}.${this.resourceName}.dataset_id`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get table_id(): string {
    return `${this.resourceType}.${this.resourceName}.table_id`;
  }
}
