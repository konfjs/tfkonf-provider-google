import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexEntryGroupIamPolicyArgs {
  entry_group_id: string;
  policy_data: string;
}

export class google_dataplex_entry_group_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexEntryGroupIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_dataplex_entry_group_iam_policy", resourceName);
  }

  get entry_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.entry_group_id`;
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

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}