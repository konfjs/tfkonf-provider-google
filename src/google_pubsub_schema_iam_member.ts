import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubSchemaIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePubsubSchemaIamMemberArgs {
  member: string;
  role: string;
  schema: string;
  condition?: GooglePubsubSchemaIamMemberArgsCondition;
}

export class google_pubsub_schema_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GooglePubsubSchemaIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_pubsub_schema_iam_member", resourceName);
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

  get schema(): string {
    return `${this.resourceType}.${this.resourceName}.schema`;
  }
}
