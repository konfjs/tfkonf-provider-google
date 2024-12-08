import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexEntryTypeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexEntryTypeIamBindingArgs {
  entry_type_id: string;
  members: string[];
  role: string;
  condition?: GoogleDataplexEntryTypeIamBindingArgsCondition;
}

export class google_dataplex_entry_type_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataplexEntryTypeIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_entry_type_iam_binding", resourceName);
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
