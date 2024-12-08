import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBigtableTableIamPolicyArgs {
  instance: string;
  table: string;
}

export class data_google_bigtable_table_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleBigtableTableIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_bigtable_table_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get table(): string {
    return `data.${this.resourceType}.${this.resourceName}.table`;
  }
}
