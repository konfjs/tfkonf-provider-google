import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleProjectIamMemberArgs {
  member: string;
  project: string;
  role: string;
  condition?: GoogleProjectIamMemberArgsCondition;
}

export class google_project_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleProjectIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_project_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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
}
