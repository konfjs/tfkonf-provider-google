import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingProjectExclusionArgs {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}

export class google_logging_project_exclusion extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleLoggingProjectExclusionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_logging_project_exclusion", resourceName);
  }

  get filter(): string {
    return `${this.resourceType}.${this.resourceName}.filter`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
