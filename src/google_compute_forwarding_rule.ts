import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeForwardingRuleArgsServiceDirectoryRegistrations {
  service?: string;
}

export interface GoogleComputeForwardingRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeForwardingRuleArgs {
  all_ports?: boolean;
  allow_global_access?: boolean;
  allow_psc_global_access?: boolean;
  backend_service?: string;
  description?: string;
  is_mirroring_collector?: boolean;
  labels?: { [key: string]: string };
  load_balancing_scheme?: string;
  name: string;
  no_automate_dns_zone?: boolean;
  ports?: string[];
  recreate_closed_psc?: boolean;
  service_label?: string;
  source_ip_ranges?: string[];
  target?: string;
  service_directory_registrations?: GoogleComputeForwardingRuleArgsServiceDirectoryRegistrations;
  timeouts?: GoogleComputeForwardingRuleArgsTimeouts;
}

export class google_compute_forwarding_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeForwardingRuleArgs) {
    const meta = {service_directory_registrations:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_forwarding_rule", resourceName);
  }

  get base_forwarding_rule(): string {
    return `${this.resourceType}.${this.resourceName}.base_forwarding_rule`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get forwarding_rule_id(): string {
    return `${this.resourceType}.${this.resourceName}.forwarding_rule_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get ip_protocol(): string {
    return `${this.resourceType}.${this.resourceName}.ip_protocol`;
  }

  get ip_version(): string {
    return `${this.resourceType}.${this.resourceName}.ip_version`;
  }

  get label_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.label_fingerprint`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get network_tier(): string {
    return `${this.resourceType}.${this.resourceName}.network_tier`;
  }

  get port_range(): string {
    return `${this.resourceType}.${this.resourceName}.port_range`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get psc_connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.psc_connection_id`;
  }

  get psc_connection_status(): string {
    return `${this.resourceType}.${this.resourceName}.psc_connection_status`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }

  get subnetwork(): string {
    return `${this.resourceType}.${this.resourceName}.subnetwork`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
