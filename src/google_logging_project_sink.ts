import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingProjectSinkArgsBigqueryOptions {
  use_partitioned_tables: boolean;
}

export interface GoogleLoggingProjectSinkArgsExclusions {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}

export interface GoogleLoggingProjectSinkArgs {
  custom_writer_identity?: string;
  description?: string;
  destination: string;
  disabled?: boolean;
  filter?: string;
  name: string;
  unique_writer_identity?: boolean;
  bigquery_options?: GoogleLoggingProjectSinkArgsBigqueryOptions;
  exclusions?: GoogleLoggingProjectSinkArgsExclusions[];
}

export class google_logging_project_sink extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleLoggingProjectSinkArgs) {
    const meta = {bigquery_options:{isBlock:true},exclusions:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_project_sink", resourceName);
  }

  get destination(): string {
    return `${this.resourceType}.${this.resourceName}.destination`;
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

  get writer_identity(): string {
    return `${this.resourceType}.${this.resourceName}.writer_identity`;
  }
}
