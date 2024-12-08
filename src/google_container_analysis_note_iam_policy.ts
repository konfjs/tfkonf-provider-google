import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerAnalysisNoteIamPolicyArgs {
  note: string;
  policy_data: string;
}

export class google_container_analysis_note_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleContainerAnalysisNoteIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_container_analysis_note_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get note(): string {
    return `${this.resourceType}.${this.resourceName}.note`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
