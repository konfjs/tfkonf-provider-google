import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSpannerDatabaseIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSpannerDatabaseIamBindingArgs {
  database: string;
  instance: string;
  members: string[];
  role: string;
  condition?: GoogleSpannerDatabaseIamBindingArgsCondition;
}

export class google_spanner_database_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSpannerDatabaseIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_spanner_database_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
