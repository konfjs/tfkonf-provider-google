import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleGkeHubMembershipIamPolicyArgs {
  membership_id: string;
}

export class data_google_gke_hub_membership_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleGkeHubMembershipIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_gke_hub_membership_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get membership_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.membership_id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
