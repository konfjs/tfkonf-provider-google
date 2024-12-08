import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2OrganizationSourceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccV2OrganizationSourceArgs {
  description?: string;
  display_name: string;
  organization: string;
  timeouts?: GoogleSccV2OrganizationSourceArgsTimeouts;
}

export class google_scc_v2_organization_source extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccV2OrganizationSourceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_v2_organization_source", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }
}
