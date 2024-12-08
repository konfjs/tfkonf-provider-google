import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubTopicIamPolicyArgs {
  policy_data: string;
  topic: string;
}

export class google_pubsub_topic_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GooglePubsubTopicIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_pubsub_topic_iam_policy", resourceName);
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

  get topic(): string {
    return `${this.resourceType}.${this.resourceName}.topic`;
  }
}
