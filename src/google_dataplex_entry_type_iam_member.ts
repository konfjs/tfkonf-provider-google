import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexEntryTypeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexEntryTypeIamMemberArgs {
  entry_type_id: string;
  member: string;
  role: string;
  condition?: GoogleDataplexEntryTypeIamMemberArgsCondition;
}

export class google_dataplex_entry_type_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexEntryTypeIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_entry_type_iam_member", resourceName);
  }

  get entry_type_id(): string {
    return `${this.resourceType}.${this.resourceName}.entry_type_id`;
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
