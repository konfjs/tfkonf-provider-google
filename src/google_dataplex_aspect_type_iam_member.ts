import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexAspectTypeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexAspectTypeIamMemberArgs {
  aspect_type_id: string;
  member: string;
  role: string;
  condition?: GoogleDataplexAspectTypeIamMemberArgsCondition;
}

export class google_dataplex_aspect_type_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataplexAspectTypeIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_aspect_type_iam_member", resourceName);
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
