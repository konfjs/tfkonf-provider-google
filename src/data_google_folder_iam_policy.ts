import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleFolderIamPolicyArgs {
  folder: string;
}

export class data_google_folder_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleFolderIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_folder_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get folder(): string {
    return `data.${this.resourceType}.${this.resourceName}.folder`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
