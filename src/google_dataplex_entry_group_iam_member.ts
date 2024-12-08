import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexEntryGroupIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexEntryGroupIamMemberArgs {
  entry_group_id: string;
  member: string;
  role: string;
  condition?: GoogleDataplexEntryGroupIamMemberArgsCondition;
}

export class google_dataplex_entry_group_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexEntryGroupIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_entry_group_iam_member", resourceName);
  }

  get entry_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.entry_group_id`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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
