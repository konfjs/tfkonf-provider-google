import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexLakeIamPolicyArgs {
  lake: string;
  policy_data: string;
}

export class google_dataplex_lake_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataplexLakeIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_dataplex_lake_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lake(): string {
    return `${this.resourceType}.${this.resourceName}.lake`;
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
