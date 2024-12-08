import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigtableTableIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigtableTableIamBindingArgs {
  instance: string;
  members: string[];
  role: string;
  table: string;
  condition?: GoogleBigtableTableIamBindingArgsCondition;
}

export class google_bigtable_table_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigtableTableIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigtable_table_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
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
