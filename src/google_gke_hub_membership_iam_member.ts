import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubMembershipIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleGkeHubMembershipIamMemberArgs {
  member: string;
  membership_id: string;
  role: string;
  condition?: GoogleGkeHubMembershipIamMemberArgsCondition;
}

export class google_gke_hub_membership_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleGkeHubMembershipIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gke_hub_membership_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get membership_id(): string {
    return `${this.resourceType}.${this.resourceName}.membership_id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
