import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNotebooksRuntimeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleNotebooksRuntimeIamBindingArgs {
  members: string[];
  role: string;
  runtime_name: string;
  condition?: GoogleNotebooksRuntimeIamBindingArgsCondition;
}

export class google_notebooks_runtime_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNotebooksRuntimeIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_notebooks_runtime_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
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