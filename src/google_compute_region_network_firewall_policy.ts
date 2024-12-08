import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionNetworkFirewallPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionNetworkFirewallPolicyArgs {
  description?: string;
  name: string;
  timeouts?: GoogleComputeRegionNetworkFirewallPolicyArgsTimeouts;
}

export class google_compute_region_network_firewall_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeRegionNetworkFirewallPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_network_firewall_policy", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get region_network_firewall_policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.region_network_firewall_policy_id`;
  }

  get rule_tuple_count(): string {
    return `${this.resourceType}.${this.resourceName}.rule_tuple_count`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get self_link_with_id(): string {
    return `${this.resourceType}.${this.resourceName}.self_link_with_id`;
  }
}
