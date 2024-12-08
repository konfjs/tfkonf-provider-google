import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubSubscriptionIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePubsubSubscriptionIamMemberArgs {
  member: string;
  role: string;
  subscription: string;
  condition?: GooglePubsubSubscriptionIamMemberArgsCondition;
}

export class google_pubsub_subscription_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GooglePubsubSubscriptionIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_pubsub_subscription_iam_member", resourceName);
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

  get subscription(): string {
    return `${this.resourceType}.${this.resourceName}.subscription`;
  }
}
