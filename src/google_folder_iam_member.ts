import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFolderIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleFolderIamMemberArgs {
  folder: string;
  member: string;
  role: string;
  condition?: GoogleFolderIamMemberArgsCondition;
}

export class google_folder_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFolderIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_folder_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
