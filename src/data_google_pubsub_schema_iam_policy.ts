import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGooglePubsubSchemaIamPolicyArgs {
  schema: string;
}

export class data_google_pubsub_schema_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGooglePubsubSchemaIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_pubsub_schema_iam_policy", resourceName);
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

  get schema(): string {
    return `data.${this.resourceType}.${this.resourceName}.schema`;
  }
}
