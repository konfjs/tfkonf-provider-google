import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccEventThreatDetectionCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccEventThreatDetectionCustomModuleArgs {
  config: string;
  display_name?: string;
  enablement_state: string;
  organization: string;
  type: string;
  timeouts?: GoogleSccEventThreatDetectionCustomModuleArgsTimeouts;
}

export class google_scc_event_threat_detection_custom_module extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSccEventThreatDetectionCustomModuleArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_event_threat_detection_custom_module", resourceName);
  }

  get config(): string {
    return `${this.resourceType}.${this.resourceName}.config`;
  }

  get enablement_state(): string {
    return `${this.resourceType}.${this.resourceName}.enablement_state`;
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

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
