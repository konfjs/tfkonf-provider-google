import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOrganizationIamCustomRoleArgs {
  description?: string;
  org_id: string;
  permissions: string[];
  role_id: string;
  stage?: string;
  title: string;
}

export class google_organization_iam_custom_role extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleOrganizationIamCustomRoleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_organization_iam_custom_role", resourceName);
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

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get permissions(): string {
    return `${this.resourceType}.${this.resourceName}.permissions`;
  }

  get role_id(): string {
    return `${this.resourceType}.${this.resourceName}.role_id`;
  }

  get title(): string {
    return `${this.resourceType}.${this.resourceName}.title`;
  }
}
