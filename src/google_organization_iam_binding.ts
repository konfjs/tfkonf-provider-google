import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOrganizationIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleOrganizationIamBindingArgs {
  members: string[];
  org_id: string;
  role: string;
  condition?: GoogleOrganizationIamBindingArgsCondition;
}

export class google_organization_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleOrganizationIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_organization_iam_binding", resourceName);
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

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
