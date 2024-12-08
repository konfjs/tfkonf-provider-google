import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeFirewallPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeFirewallPolicyArgs {
  description?: string;
  parent: string;
  short_name: string;
  timeouts?: GoogleComputeFirewallPolicyArgsTimeouts;
}

export class google_compute_firewall_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeFirewallPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_firewall_policy", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get firewall_policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.firewall_policy_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
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

  get short_name(): string {
    return `${this.resourceType}.${this.resourceName}.short_name`;
  }
}
