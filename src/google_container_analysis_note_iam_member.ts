import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerAnalysisNoteIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleContainerAnalysisNoteIamMemberArgs {
  member: string;
  note: string;
  role: string;
  condition?: GoogleContainerAnalysisNoteIamMemberArgsCondition;
}

export class google_container_analysis_note_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleContainerAnalysisNoteIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_container_analysis_note_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get note(): string {
    return `${this.resourceType}.${this.resourceName}.note`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
