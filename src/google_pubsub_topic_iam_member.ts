import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubTopicIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePubsubTopicIamMemberArgs {
  member: string;
  role: string;
  topic: string;
  condition?: GooglePubsubTopicIamMemberArgsCondition;
}

export class google_pubsub_topic_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GooglePubsubTopicIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_pubsub_topic_iam_member", resourceName);
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

  get topic(): string {
    return `${this.resourceType}.${this.resourceName}.topic`;
  }
}
