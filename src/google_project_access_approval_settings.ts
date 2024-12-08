import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectAccessApprovalSettingsArgsEnrolledServices {
  cloud_product: string;
  enrollment_level?: string;
}

export interface GoogleProjectAccessApprovalSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleProjectAccessApprovalSettingsArgs {
  active_key_version?: string;
  project?: string;
  project_id: string;
  enrolled_services: GoogleProjectAccessApprovalSettingsArgsEnrolledServices[];
  timeouts?: GoogleProjectAccessApprovalSettingsArgsTimeouts;
}

export class google_project_access_approval_settings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleProjectAccessApprovalSettingsArgs) {
    const meta = {enrolled_services:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_project_access_approval_settings", resourceName);
  }

  get ancestor_has_active_key_version(): string {
    return `${this.resourceType}.${this.resourceName}.ancestor_has_active_key_version`;
  }

  get enrolled_ancestor(): string {
    return `${this.resourceType}.${this.resourceName}.enrolled_ancestor`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get invalid_key_version(): string {
    return `${this.resourceType}.${this.resourceName}.invalid_key_version`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get notification_emails(): string {
    return `${this.resourceType}.${this.resourceName}.notification_emails`;
  }

  get project_id(): string {
    return `${this.resourceType}.${this.resourceName}.project_id`;
  }
}
