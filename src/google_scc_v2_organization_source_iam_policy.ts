import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2OrganizationSourceIamPolicyArgs {
  organization: string;
  policy_data: string;
  source: string;
}

export class google_scc_v2_organization_source_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccV2OrganizationSourceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_scc_v2_organization_source_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get source(): string {
    return `${this.resourceType}.${this.resourceName}.source`;
  }
}
