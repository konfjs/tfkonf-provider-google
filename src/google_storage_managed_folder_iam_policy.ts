import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageManagedFolderIamPolicyArgs {
  bucket: string;
  managed_folder: string;
  policy_data: string;
}

export class google_storage_managed_folder_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageManagedFolderIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_storage_managed_folder_iam_policy", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_folder(): string {
    return `${this.resourceType}.${this.resourceName}.managed_folder`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
