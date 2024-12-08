import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryTableIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigqueryTableIamMemberArgs {
  dataset_id: string;
  member: string;
  role: string;
  table_id: string;
  condition?: GoogleBigqueryTableIamMemberArgsCondition;
}

export class google_bigquery_table_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryTableIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_table_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
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
