import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfileSeverityOverrides {
  action: string;
  severity: string;
}

export interface GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfileThreatOverrides {
  action: string;
  threat_id: string;
}

export interface GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfile {
  severity_overrides?: GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfileSeverityOverrides[];
  threat_overrides?: GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfileThreatOverrides[];
}

export interface GoogleNetworkSecuritySecurityProfileArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkSecuritySecurityProfileArgs {
  description?: string;
  labels?: { [key: string]: string };
  location?: string;
  name: string;
  parent?: string;
  type: string;
  threat_prevention_profile?: GoogleNetworkSecuritySecurityProfileArgsThreatPreventionProfile;
  timeouts?: GoogleNetworkSecuritySecurityProfileArgsTimeouts;
}

export class google_network_security_security_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetworkSecuritySecurityProfileArgs) {
    const meta = {threat_prevention_profile:{isBlock:true,severity_overrides:{isBlock:true},threat_overrides:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_security_security_profile", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
