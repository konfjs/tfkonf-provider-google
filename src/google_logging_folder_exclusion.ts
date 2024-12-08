import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingFolderExclusionArgs {
  description?: string;
  disabled?: boolean;
  filter: string;
  folder: string;
  name: string;
}

export class google_logging_folder_exclusion extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleLoggingFolderExclusionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_logging_folder_exclusion", resourceName);
  }

  get filter(): string {
    return `${this.resourceType}.${this.resourceName}.filter`;
  }

  get folder(): string {
    return `${this.resourceType}.${this.resourceName}.folder`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
