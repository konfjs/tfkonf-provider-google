import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeFirewallPolicyAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeFirewallPolicyAssociationArgs {
  attachment_target: string;
  firewall_policy: string;
  name: string;
  timeouts?: GoogleComputeFirewallPolicyAssociationArgsTimeouts;
}

export class google_compute_firewall_policy_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeFirewallPolicyAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_firewall_policy_association", resourceName);
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

  get short_name(): string {
    return `${this.resourceType}.${this.resourceName}.short_name`;
  }
}
