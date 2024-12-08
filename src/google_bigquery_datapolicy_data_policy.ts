import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryDatapolicyDataPolicyArgsDataMaskingPolicy {
  predefined_expression?: string;
  routine?: string;
}

export interface GoogleBigqueryDatapolicyDataPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryDatapolicyDataPolicyArgs {
  data_policy_id: string;
  data_policy_type: string;
  location: string;
  policy_tag: string;
  data_masking_policy?: GoogleBigqueryDatapolicyDataPolicyArgsDataMaskingPolicy;
  timeouts?: GoogleBigqueryDatapolicyDataPolicyArgsTimeouts;
}

export class google_bigquery_datapolicy_data_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigqueryDatapolicyDataPolicyArgs) {
    const meta = {data_masking_policy:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_datapolicy_data_policy", resourceName);
  }

  get data_policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_policy_id`;
  }

  get data_policy_type(): string {
    return `${this.resourceType}.${this.resourceName}.data_policy_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy_tag(): string {
    return `${this.resourceType}.${this.resourceName}.policy_tag`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
