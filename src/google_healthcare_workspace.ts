import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareWorkspaceArgsSettings {
  data_project_ids: string[];
}

export interface GoogleHealthcareWorkspaceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleHealthcareWorkspaceArgs {
  dataset: string;
  labels?: { [key: string]: string };
  name: string;
  settings: GoogleHealthcareWorkspaceArgsSettings;
  timeouts?: GoogleHealthcareWorkspaceArgsTimeouts;
}

export class google_healthcare_workspace extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleHealthcareWorkspaceArgs) {
    const meta = {settings:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_workspace", resourceName);
  }

  get dataset(): string {
    return `${this.resourceType}.${this.resourceName}.dataset`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
