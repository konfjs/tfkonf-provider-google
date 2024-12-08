import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSccV2OrganizationSourceIamPolicyArgs {
  organization: string;
  source: string;
}

export class data_google_scc_v2_organization_source_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleSccV2OrganizationSourceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_scc_v2_organization_source_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get organization(): string {
    return `data.${this.resourceType}.${this.resourceName}.organization`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get source(): string {
    return `data.${this.resourceType}.${this.resourceName}.source`;
  }
}
