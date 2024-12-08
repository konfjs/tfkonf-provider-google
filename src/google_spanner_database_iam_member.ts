import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSpannerDatabaseIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSpannerDatabaseIamMemberArgs {
  database: string;
  instance: string;
  member: string;
  role: string;
  condition?: GoogleSpannerDatabaseIamMemberArgsCondition;
}

export class google_spanner_database_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSpannerDatabaseIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_spanner_database_iam_member", resourceName);
  }

  get database(): string {
    return `${this.resourceType}.${this.resourceName}.database`;
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
}