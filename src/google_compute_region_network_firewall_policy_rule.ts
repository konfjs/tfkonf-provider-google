import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatchLayer4Configs {
  ip_protocol: string;
  ports?: string[];
}

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatchSrcSecureTags {
  name?: string;
}

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatch {
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
  layer4_configs: GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatchLayer4Configs[];
  src_secure_tags?: GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatchSrcSecureTags[];
}

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgsTargetSecureTags {
  name?: string;
}

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionNetworkFirewallPolicyRuleArgs {
  action: string;
  description?: string;
  direction: string;
  disabled?: boolean;
  enable_logging?: boolean;
  firewall_policy: string;
  priority: number;
  rule_name?: string;
  security_profile_group?: string;
  target_service_accounts?: string[];
  tls_inspect?: boolean;
  match: GoogleComputeRegionNetworkFirewallPolicyRuleArgsMatch;
  target_secure_tags?: GoogleComputeRegionNetworkFirewallPolicyRuleArgsTargetSecureTags[];
  timeouts?: GoogleComputeRegionNetworkFirewallPolicyRuleArgsTimeouts;
}

export class google_compute_region_network_firewall_policy_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionNetworkFirewallPolicyRuleArgs) {
    const meta = {match:{isBlock:true,layer4_configs:{isBlock:true},src_secure_tags:{isBlock:true}},target_secure_tags:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_network_firewall_policy_rule", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get rule_tuple_count(): string {
    return `${this.resourceType}.${this.resourceName}.rule_tuple_count`;
  }
}
