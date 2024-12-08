import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubSchemaIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePubsubSchemaIamBindingArgs {
  members: string[];
  role: string;
  schema: string;
  condition?: GooglePubsubSchemaIamBindingArgsCondition;
}

export class google_pubsub_schema_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GooglePubsubSchemaIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_pubsub_schema_iam_binding", resourceName);
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

  get schema(): string {
    return `${this.resourceType}.${this.resourceName}.schema`;
  }
}
