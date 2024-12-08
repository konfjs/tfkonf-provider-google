import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryDatasetIamPolicyArgs {
  dataset_id: string;
  policy_data: string;
}

export class google_bigquery_dataset_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryDatasetIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_bigquery_dataset_iam_policy", resourceName);
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
}
