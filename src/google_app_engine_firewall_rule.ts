import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAppEngineFirewallRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAppEngineFirewallRuleArgs {
  action: string;
  description?: string;
  priority?: number;
  source_range: string;
  timeouts?: GoogleAppEngineFirewallRuleArgsTimeouts;
}

export class google_app_engine_firewall_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAppEngineFirewallRuleArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_app_engine_firewall_rule", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get source_range(): string {
    return `${this.resourceType}.${this.resourceName}.source_range`;
  }
}
