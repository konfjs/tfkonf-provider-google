import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubScopeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleGkeHubScopeIamBindingArgs {
  members: string[];
  role: string;
  scope_id: string;
  condition?: GoogleGkeHubScopeIamBindingArgsCondition;
}

export class google_gke_hub_scope_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleGkeHubScopeIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gke_hub_scope_iam_binding", resourceName);
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
