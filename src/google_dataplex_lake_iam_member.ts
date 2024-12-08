import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexLakeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexLakeIamMemberArgs {
  lake: string;
  member: string;
  role: string;
  condition?: GoogleDataplexLakeIamMemberArgsCondition;
}

export class google_dataplex_lake_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexLakeIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_lake_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lake(): string {
    return `${this.resourceType}.${this.resourceName}.lake`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
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
