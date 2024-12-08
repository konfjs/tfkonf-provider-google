import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexLakeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexLakeIamBindingArgs {
  lake: string;
  members: string[];
  role: string;
  condition?: GoogleDataplexLakeIamBindingArgsCondition;
}

export class google_dataplex_lake_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataplexLakeIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_lake_iam_binding", resourceName);
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
