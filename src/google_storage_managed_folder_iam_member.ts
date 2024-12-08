import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageManagedFolderIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleStorageManagedFolderIamMemberArgs {
  bucket: string;
  managed_folder: string;
  member: string;
  role: string;
  condition?: GoogleStorageManagedFolderIamMemberArgsCondition;
}

export class google_storage_managed_folder_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageManagedFolderIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_managed_folder_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
