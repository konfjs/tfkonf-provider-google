import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGooglePubsubSubscriptionIamPolicyArgs {
  subscription: string;
}

export class data_google_pubsub_subscription_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGooglePubsubSubscriptionIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_pubsub_subscription_iam_policy", resourceName);
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

  get subscription(): string {
    return `data.${this.resourceType}.${this.resourceName}.subscription`;
  }
}
