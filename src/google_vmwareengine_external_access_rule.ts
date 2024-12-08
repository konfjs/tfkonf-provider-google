import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVmwareengineExternalAccessRuleArgsDestinationIpRanges {
  external_address?: string;
  ip_address_range?: string;
}

export interface GoogleVmwareengineExternalAccessRuleArgsSourceIpRanges {
  ip_address?: string;
  ip_address_range?: string;
}

export interface GoogleVmwareengineExternalAccessRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVmwareengineExternalAccessRuleArgs {
  action: string;
  description?: string;
  destination_ports: string[];
  ip_protocol: string;
  name: string;
  parent: string;
  priority: number;
  source_ports: string[];
  destination_ip_ranges: GoogleVmwareengineExternalAccessRuleArgsDestinationIpRanges[];
  source_ip_ranges: GoogleVmwareengineExternalAccessRuleArgsSourceIpRanges[];
  timeouts?: GoogleVmwareengineExternalAccessRuleArgsTimeouts;
}

export class google_vmwareengine_external_access_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleVmwareengineExternalAccessRuleArgs) {
    const meta = {destination_ip_ranges:{isBlock:true},source_ip_ranges:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vmwareengine_external_access_rule", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get destination_ports(): string {
    return `${this.resourceType}.${this.resourceName}.destination_ports`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_protocol(): string {
    return `${this.resourceType}.${this.resourceName}.ip_protocol`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }

  get source_ports(): string {
    return `${this.resourceType}.${this.resourceName}.source_ports`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
