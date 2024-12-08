import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSpannerDatabaseIamPolicyArgs {
  database: string;
  instance: string;
  policy_data: string;
}

export class google_spanner_database_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSpannerDatabaseIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_spanner_database_iam_policy", resourceName);
  }

  get database(): string {
    return `${this.resourceType}.${this.resourceName}.database`;
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
}
