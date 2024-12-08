import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccSourceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSccSourceIamBindingArgs {
  members: string[];
  organization: string;
  role: string;
  source: string;
  condition?: GoogleSccSourceIamBindingArgsCondition;
}

export class google_scc_source_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccSourceIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_source_iam_binding", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get source(): string {
    return `${this.resourceType}.${this.resourceName}.source`;
  }
}
