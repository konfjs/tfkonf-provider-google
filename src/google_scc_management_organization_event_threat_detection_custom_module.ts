import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccManagementOrganizationEventThreatDetectionCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccManagementOrganizationEventThreatDetectionCustomModuleArgs {
  config?: string;
  display_name?: string;
  enablement_state?: string;
  location?: string;
  organization: string;
  type?: string;
  timeouts?: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleArgsTimeouts;
}

export class google_scc_management_organization_event_threat_detection_custom_module extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_management_organization_event_threat_detection_custom_module", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_editor(): string {
    return `${this.resourceType}.${this.resourceName}.last_editor`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
