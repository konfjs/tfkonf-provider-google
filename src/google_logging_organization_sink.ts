import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingOrganizationSinkArgsBigqueryOptions {
  use_partitioned_tables: boolean;
}

export interface GoogleLoggingOrganizationSinkArgsExclusions {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}

export interface GoogleLoggingOrganizationSinkArgs {
  description?: string;
  destination: string;
  disabled?: boolean;
  filter?: string;
  include_children?: boolean;
  intercept_children?: boolean;
  name: string;
  org_id: string;
  bigquery_options?: GoogleLoggingOrganizationSinkArgsBigqueryOptions;
  exclusions?: GoogleLoggingOrganizationSinkArgsExclusions[];
}

export class google_logging_organization_sink extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleLoggingOrganizationSinkArgs) {
    const meta = {bigquery_options:{isBlock:true},exclusions:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_organization_sink", resourceName);
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

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get writer_identity(): string {
    return `${this.resourceType}.${this.resourceName}.writer_identity`;
  }
}
