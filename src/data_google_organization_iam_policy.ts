import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleOrganizationIamPolicyArgs {
  org_id: string;
}

export class data_google_organization_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleOrganizationIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_organization_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get org_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.org_id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
