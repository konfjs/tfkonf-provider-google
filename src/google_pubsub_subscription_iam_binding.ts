import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubSubscriptionIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePubsubSubscriptionIamBindingArgs {
  members: string[];
  role: string;
  subscription: string;
  condition?: GooglePubsubSubscriptionIamBindingArgsCondition;
}

export class google_pubsub_subscription_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GooglePubsubSubscriptionIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_pubsub_subscription_iam_binding", resourceName);
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

  get subscription(): string {
    return `${this.resourceType}.${this.resourceName}.subscription`;
  }
}
