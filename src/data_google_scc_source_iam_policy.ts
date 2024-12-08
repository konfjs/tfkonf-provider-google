import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSccSourceIamPolicyArgs {
  organization: string;
  source: string;
}

export class data_google_scc_source_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSccSourceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_scc_source_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get organization(): string {
    return `data.${this.resourceType}.${this.resourceName}.organization`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get source(): string {
    return `data.${this.resourceType}.${this.resourceName}.source`;
  }
}
