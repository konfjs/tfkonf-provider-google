import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBigqueryDatapolicyDataPolicyIamPolicyArgs {
  data_policy_id: string;
}

export class data_google_bigquery_datapolicy_data_policy_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleBigqueryDatapolicyDataPolicyIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_bigquery_datapolicy_data_policy_iam_policy", resourceName);
  }

  get data_policy_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.data_policy_id`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
