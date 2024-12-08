import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigtableTableIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigtableTableIamMemberArgs {
  instance: string;
  member: string;
  role: string;
  table: string;
  condition?: GoogleBigtableTableIamMemberArgsCondition;
}

export class google_bigtable_table_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigtableTableIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigtable_table_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
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

  get table(): string {
    return `${this.resourceType}.${this.resourceName}.table`;
  }
}
