import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleContainerAnalysisNoteIamPolicyArgs {
  note: string;
}

export class data_google_container_analysis_note_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleContainerAnalysisNoteIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_container_analysis_note_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get note(): string {
    return `data.${this.resourceType}.${this.resourceName}.note`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
