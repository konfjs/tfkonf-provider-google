import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNetworkFirewallPolicyAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeNetworkFirewallPolicyAssociationArgs {
  attachment_target: string;
  firewall_policy: string;
  name: string;
  timeouts?: GoogleComputeNetworkFirewallPolicyAssociationArgsTimeouts;
}

export class google_compute_network_firewall_policy_association extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeNetworkFirewallPolicyAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_network_firewall_policy_association", resourceName);
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

  get short_name(): string {
    return `${this.resourceType}.${this.resourceName}.short_name`;
  }
}
