import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryDatapolicyDataPolicyIamPolicyArgs {
  data_policy_id: string;
  policy_data: string;
}

export class google_bigquery_datapolicy_data_policy_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryDatapolicyDataPolicyIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_bigquery_datapolicy_data_policy_iam_policy", resourceName);
  }

  get data_policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_policy_id`;
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

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
