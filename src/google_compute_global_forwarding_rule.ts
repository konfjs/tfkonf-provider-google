import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeGlobalForwardingRuleArgsMetadataFiltersFilterLabels {
  name: string;
  value: string;
}

export interface GoogleComputeGlobalForwardingRuleArgsMetadataFilters {
  filter_match_criteria: string;
  filter_labels: GoogleComputeGlobalForwardingRuleArgsMetadataFiltersFilterLabels[];
}

export interface GoogleComputeGlobalForwardingRuleArgsServiceDirectoryRegistrations {
  service_directory_region?: string;
}

export interface GoogleComputeGlobalForwardingRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeGlobalForwardingRuleArgs {
  description?: string;
  ip_version?: string;
  labels?: { [key: string]: string };
  load_balancing_scheme?: string;
  name: string;
  no_automate_dns_zone?: boolean;
  port_range?: string;
  source_ip_ranges?: string[];
  target: string;
  metadata_filters?: GoogleComputeGlobalForwardingRuleArgsMetadataFilters[];
  service_directory_registrations?: GoogleComputeGlobalForwardingRuleArgsServiceDirectoryRegistrations;
  timeouts?: GoogleComputeGlobalForwardingRuleArgsTimeouts;
}

export class google_compute_global_forwarding_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeGlobalForwardingRuleArgs) {
    const meta = {metadata_filters:{isBlock:true,filter_labels:{isBlock:true}},service_directory_registrations:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_global_forwarding_rule", resourceName);
  }

  get base_forwarding_rule(): string {
    return `${this.resourceType}.${this.resourceName}.base_forwarding_rule`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get label_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.label_fingerprint`;
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

  get psc_connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.psc_connection_id`;
  }

  get psc_connection_status(): string {
    return `${this.resourceType}.${this.resourceName}.psc_connection_status`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get subnetwork(): string {
    return `${this.resourceType}.${this.resourceName}.subnetwork`;
  }

  get target(): string {
    return `${this.resourceType}.${this.resourceName}.target`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
