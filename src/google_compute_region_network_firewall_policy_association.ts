import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionNetworkFirewallPolicyAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeRegionNetworkFirewallPolicyAssociationArgs {
  attachment_target: string;
  firewall_policy: string;
  name: string;
  timeouts?: GoogleComputeRegionNetworkFirewallPolicyAssociationArgsTimeouts;
}

export class google_compute_region_network_firewall_policy_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeRegionNetworkFirewallPolicyAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_network_firewall_policy_association", resourceName);
  }

  get attachment_target(): string {
    return `${this.resourceType}.${this.resourceName}.attachment_target`;
  }

  get firewall_policy(): string {
    return `${this.resourceType}.${this.resourceName}.firewall_policy`;
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

  get short_name(): string {
    return `${this.resourceType}.${this.resourceName}.short_name`;
  }
}
