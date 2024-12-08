import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubFeatureIamPolicyArgs {
  name: string;
  policy_data: string;
}

export class google_gke_hub_feature_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleGkeHubFeatureIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_gke_hub_feature_iam_policy", resourceName);
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
