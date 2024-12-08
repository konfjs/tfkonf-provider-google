import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSpannerDatabaseIamPolicyArgs {
  database: string;
  instance: string;
}

export class data_google_spanner_database_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleSpannerDatabaseIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_spanner_database_iam_policy", resourceName);
  }

  get database(): string {
    return `data.${this.resourceType}.${this.resourceName}.database`;
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
}
