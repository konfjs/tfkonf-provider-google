import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFolderIamPolicyArgs {
  folder: string;
  policy_data: string;
}

export class google_folder_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleFolderIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_folder_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get folder(): string {
    return `${this.resourceType}.${this.resourceName}.folder`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
