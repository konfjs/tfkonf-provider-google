import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubMembershipIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleGkeHubMembershipIamBindingArgs {
  members: string[];
  membership_id: string;
  role: string;
  condition?: GoogleGkeHubMembershipIamBindingArgsCondition;
}

export class google_gke_hub_membership_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleGkeHubMembershipIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gke_hub_membership_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
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
