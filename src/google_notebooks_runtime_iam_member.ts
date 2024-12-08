import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNotebooksRuntimeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleNotebooksRuntimeIamMemberArgs {
  member: string;
  role: string;
  runtime_name: string;
  condition?: GoogleNotebooksRuntimeIamMemberArgsCondition;
}

export class google_notebooks_runtime_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNotebooksRuntimeIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_notebooks_runtime_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get runtime_name(): string {
    return `${this.resourceType}.${this.resourceName}.runtime_name`;
  }
}
