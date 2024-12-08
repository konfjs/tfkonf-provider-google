import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigtableTableIamPolicyArgs {
  instance: string;
  policy_data: string;
  table: string;
}

export class google_bigtable_table_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigtableTableIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_bigtable_table_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get table(): string {
    return `${this.resourceType}.${this.resourceName}.table`;
  }
}
