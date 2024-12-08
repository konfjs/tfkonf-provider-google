import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryDatapolicyDataPolicyIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigqueryDatapolicyDataPolicyIamBindingArgs {
  data_policy_id: string;
  members: string[];
  role: string;
  condition?: GoogleBigqueryDatapolicyDataPolicyIamBindingArgsCondition;
}

export class google_bigquery_datapolicy_data_policy_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryDatapolicyDataPolicyIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_datapolicy_data_policy_iam_binding", resourceName);
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
