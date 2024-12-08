import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerAnalysisNoteIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleContainerAnalysisNoteIamBindingArgs {
  members: string[];
  note: string;
  role: string;
  condition?: GoogleContainerAnalysisNoteIamBindingArgsCondition;
}

export class google_container_analysis_note_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleContainerAnalysisNoteIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_container_analysis_note_iam_binding", resourceName);
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
