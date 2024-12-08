import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageManagedFolderIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleStorageManagedFolderIamBindingArgs {
  bucket: string;
  managed_folder: string;
  members: string[];
  role: string;
  condition?: GoogleStorageManagedFolderIamBindingArgsCondition;
}

export class google_storage_managed_folder_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageManagedFolderIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_managed_folder_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
