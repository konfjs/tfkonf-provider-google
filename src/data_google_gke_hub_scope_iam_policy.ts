import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleGkeHubScopeIamPolicyArgs {
  scope_id: string;
}

export class data_google_gke_hub_scope_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleGkeHubScopeIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_gke_hub_scope_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get scope_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.scope_id`;
  }
}
