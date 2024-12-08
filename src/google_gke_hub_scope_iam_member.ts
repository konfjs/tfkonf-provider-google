import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubScopeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleGkeHubScopeIamMemberArgs {
  member: string;
  role: string;
  scope_id: string;
  condition?: GoogleGkeHubScopeIamMemberArgsCondition;
}

export class google_gke_hub_scope_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleGkeHubScopeIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gke_hub_scope_iam_member", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get scope_id(): string {
    return `${this.resourceType}.${this.resourceName}.scope_id`;
  }
}
