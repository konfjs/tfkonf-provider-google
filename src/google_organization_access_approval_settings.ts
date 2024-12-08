import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOrganizationAccessApprovalSettingsArgsEnrolledServices {
  cloud_product: string;
  enrollment_level?: string;
}

export interface GoogleOrganizationAccessApprovalSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleOrganizationAccessApprovalSettingsArgs {
  active_key_version?: string;
  organization_id: string;
  enrolled_services: GoogleOrganizationAccessApprovalSettingsArgsEnrolledServices[];
  timeouts?: GoogleOrganizationAccessApprovalSettingsArgsTimeouts;
}

export class google_organization_access_approval_settings extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleOrganizationAccessApprovalSettingsArgs) {
    const meta = {enrolled_services:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_organization_access_approval_settings", resourceName);
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

  get organization_id(): string {
    return `${this.resourceType}.${this.resourceName}.organization_id`;
  }
}
