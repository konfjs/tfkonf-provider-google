import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectIamCustomRoleArgs {
  description?: string;
  permissions: string[];
  role_id: string;
  stage?: string;
  title: string;
}

export class google_project_iam_custom_role extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleProjectIamCustomRoleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_project_iam_custom_role", resourceName);
  }

  get deleted(): string {
    return `${this.resourceType}.${this.resourceName}.deleted`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get permissions(): string {
    return `${this.resourceType}.${this.resourceName}.permissions`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role_id(): string {
    return `${this.resourceType}.${this.resourceName}.role_id`;
  }

  get title(): string {
    return `${this.resourceType}.${this.resourceName}.title`;
  }
}
