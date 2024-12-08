import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFolderIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleFolderIamBindingArgs {
  folder: string;
  members: string[];
  role: string;
  condition?: GoogleFolderIamBindingArgsCondition;
}

export class google_folder_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleFolderIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_folder_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
