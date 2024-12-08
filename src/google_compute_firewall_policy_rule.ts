import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeFirewallPolicyRuleArgsMatchLayer4Configs {
  ip_protocol: string;
  ports?: string[];
}

export interface GoogleComputeFirewallPolicyRuleArgsMatch {
  dest_address_groups?: string[];
  dest_fqdns?: string[];
  dest_ip_ranges?: string[];
  dest_region_codes?: string[];
  dest_threat_intelligences?: string[];
  src_address_groups?: string[];
  src_fqdns?: string[];
  src_ip_ranges?: string[];
  src_region_codes?: string[];
  src_threat_intelligences?: string[];
  layer4_configs: GoogleComputeFirewallPolicyRuleArgsMatchLayer4Configs[];
}

export interface GoogleComputeFirewallPolicyRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeFirewallPolicyRuleArgs {
  action: string;
  description?: string;
  direction: string;
  disabled?: boolean;
  enable_logging?: boolean;
  firewall_policy: string;
  priority: number;
  security_profile_group?: string;
  target_resources?: string[];
  target_service_accounts?: string[];
  tls_inspect?: boolean;
  match: GoogleComputeFirewallPolicyRuleArgsMatch;
  timeouts?: GoogleComputeFirewallPolicyRuleArgsTimeouts;
}

export class google_compute_firewall_policy_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeFirewallPolicyRuleArgs) {
    const meta = {match:{isBlock:true,layer4_configs:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_firewall_policy_rule", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get direction(): string {
    return `${this.resourceType}.${this.resourceName}.direction`;
  }

  get firewall_policy(): string {
    return `${this.resourceType}.${this.resourceName}.firewall_policy`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kind(): string {
    return `${this.resourceType}.${this.resourceName}.kind`;
  }

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }

  get rule_tuple_count(): string {
    return `${this.resourceType}.${this.resourceName}.rule_tuple_count`;
  }
}
