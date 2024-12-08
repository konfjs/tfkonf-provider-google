import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectIamMemberRemoveArgs {
  member: string;
  project: string;
  role: string;
}

export class google_project_iam_member_remove extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleProjectIamMemberRemoveArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_project_iam_member_remove", resourceName);
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
