import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexAspectTypeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexAspectTypeIamBindingArgs {
  aspect_type_id: string;
  members: string[];
  role: string;
  condition?: GoogleDataplexAspectTypeIamBindingArgsCondition;
}

export class google_dataplex_aspect_type_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexAspectTypeIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_aspect_type_iam_binding", resourceName);
  }

  get aspect_type_id(): string {
    return `${this.resourceType}.${this.resourceName}.aspect_type_id`;
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
