import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubMembershipIamPolicyArgs {
  membership_id: string;
  policy_data: string;
}

export class google_gke_hub_membership_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleGkeHubMembershipIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_gke_hub_membership_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get membership_id(): string {
    return `${this.resourceType}.${this.resourceName}.membership_id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}