import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingFolderSinkArgsBigqueryOptions {
  use_partitioned_tables: boolean;
}

export interface GoogleLoggingFolderSinkArgsExclusions {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}

export interface GoogleLoggingFolderSinkArgs {
  description?: string;
  destination: string;
  disabled?: boolean;
  filter?: string;
  folder: string;
  include_children?: boolean;
  intercept_children?: boolean;
  name: string;
  bigquery_options?: GoogleLoggingFolderSinkArgsBigqueryOptions;
  exclusions?: GoogleLoggingFolderSinkArgsExclusions[];
}

export class google_logging_folder_sink extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleLoggingFolderSinkArgs) {
    const meta = {bigquery_options:{isBlock:true},exclusions:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_folder_sink", resourceName);
  }

  get destination(): string {
    return `${this.resourceType}.${this.resourceName}.destination`;
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

  get writer_identity(): string {
    return `${this.resourceType}.${this.resourceName}.writer_identity`;
  }
}
