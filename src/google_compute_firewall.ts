import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeFirewallArgsAllow {
  ports?: string[];
  protocol: string;
}

export interface GoogleComputeFirewallArgsDeny {
  ports?: string[];
  protocol: string;
}

export interface GoogleComputeFirewallArgsLogConfig {
  metadata: string;
}

export interface GoogleComputeFirewallArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeFirewallArgs {
  description?: string;
  disabled?: boolean;
  name: string;
  network: string;
  priority?: number;
  source_ranges?: string[];
  source_service_accounts?: string[];
  source_tags?: string[];
  target_service_accounts?: string[];
  target_tags?: string[];
  allow?: GoogleComputeFirewallArgsAllow[];
  deny?: GoogleComputeFirewallArgsDeny[];
  log_config?: GoogleComputeFirewallArgsLogConfig;
  timeouts?: GoogleComputeFirewallArgsTimeouts;
}

export class google_compute_firewall extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeFirewallArgs) {
    const meta = {allow:{isBlock:true},deny:{isBlock:true},log_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_firewall", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get destination_ranges(): string {
    return `${this.resourceType}.${this.resourceName}.destination_ranges`;
  }

  get direction(): string {
    return `${this.resourceType}.${this.resourceName}.direction`;
  }

  get enable_logging(): string {
    return `${this.resourceType}.${this.resourceName}.enable_logging`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
