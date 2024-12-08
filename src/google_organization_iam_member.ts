import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOrganizationIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleOrganizationIamMemberArgs {
  member: string;
  org_id: string;
  role: string;
  condition?: GoogleOrganizationIamMemberArgsCondition;
}

export class google_organization_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleOrganizationIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_organization_iam_member", resourceName);
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

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
