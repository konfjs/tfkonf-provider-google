import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOrganizationIamPolicyArgs {
  org_id: string;
  policy_data: string;
}

export class google_organization_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleOrganizationIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_organization_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
