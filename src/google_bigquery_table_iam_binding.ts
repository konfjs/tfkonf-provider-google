import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryTableIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigqueryTableIamBindingArgs {
  dataset_id: string;
  members: string[];
  role: string;
  table_id: string;
  condition?: GoogleBigqueryTableIamBindingArgsCondition;
}

export class google_bigquery_table_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigqueryTableIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_table_iam_binding", resourceName);
  }

  get dataset_id(): string {
    return `${this.resourceType}.${this.resourceName}.dataset_id`;
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

  get table_id(): string {
    return `${this.resourceType}.${this.resourceName}.table_id`;
  }
}
