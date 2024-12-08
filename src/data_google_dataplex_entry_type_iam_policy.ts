import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataplexEntryTypeIamPolicyArgs {
  entry_type_id: string;
}

export class data_google_dataplex_entry_type_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleDataplexEntryTypeIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dataplex_entry_type_iam_policy", resourceName);
  }

  get entry_type_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.entry_type_id`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
