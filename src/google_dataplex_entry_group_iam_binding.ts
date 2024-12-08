import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexEntryGroupIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexEntryGroupIamBindingArgs {
  entry_group_id: string;
  members: string[];
  role: string;
  condition?: GoogleDataplexEntryGroupIamBindingArgsCondition;
}

export class google_dataplex_entry_group_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexEntryGroupIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_entry_group_iam_binding", resourceName);
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
