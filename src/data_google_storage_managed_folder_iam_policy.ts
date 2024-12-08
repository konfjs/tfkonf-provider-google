import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleStorageManagedFolderIamPolicyArgs {
  bucket: string;
  managed_folder: string;
}

export class data_google_storage_managed_folder_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleStorageManagedFolderIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_storage_managed_folder_iam_policy", resourceName);
  }

  get bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_folder(): string {
    return `data.${this.resourceType}.${this.resourceName}.managed_folder`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
