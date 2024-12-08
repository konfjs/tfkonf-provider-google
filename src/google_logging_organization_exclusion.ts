import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingOrganizationExclusionArgs {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
  org_id: string;
}

export class google_logging_organization_exclusion extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleLoggingOrganizationExclusionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_logging_organization_exclusion", resourceName);
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

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }
}
