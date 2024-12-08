import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryDatapolicyDataPolicyIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigqueryDatapolicyDataPolicyIamMemberArgs {
  data_policy_id: string;
  member: string;
  role: string;
  condition?: GoogleBigqueryDatapolicyDataPolicyIamMemberArgsCondition;
}

export class google_bigquery_datapolicy_data_policy_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryDatapolicyDataPolicyIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_datapolicy_data_policy_iam_member", resourceName);
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
