import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleProjectIamBindingArgs {
  members: string[];
  project: string;
  role: string;
  condition?: GoogleProjectIamBindingArgsCondition;
}

export class google_project_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleProjectIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_project_iam_binding", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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
}
