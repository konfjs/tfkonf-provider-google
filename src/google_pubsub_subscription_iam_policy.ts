import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubSubscriptionIamPolicyArgs {
  policy_data: string;
  subscription: string;
}

export class google_pubsub_subscription_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GooglePubsubSubscriptionIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_pubsub_subscription_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get subscription(): string {
    return `${this.resourceType}.${this.resourceName}.subscription`;
  }
}
