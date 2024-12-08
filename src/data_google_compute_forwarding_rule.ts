import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeForwardingRuleArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_compute_forwarding_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeForwardingRuleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_forwarding_rule", resourceName);
  }

  get all_ports(): string {
    return `data.${this.resourceType}.${this.resourceName}.all_ports`;
  }

  get allow_global_access(): string {
    return `data.${this.resourceType}.${this.resourceName}.allow_global_access`;
  }

  get allow_psc_global_access(): string {
    return `data.${this.resourceType}.${this.resourceName}.allow_psc_global_access`;
  }

  get backend_service(): string {
    return `data.${this.resourceType}.${this.resourceName}.backend_service`;
  }

  get base_forwarding_rule(): string {
    return `data.${this.resourceType}.${this.resourceName}.base_forwarding_rule`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get forwarding_rule_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.forwarding_rule_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get ip_protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_protocol`;
  }

  get ip_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_version`;
  }

  get is_mirroring_collector(): string {
    return `data.${this.resourceType}.${this.resourceName}.is_mirroring_collector`;
  }

  get label_fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.label_fingerprint`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get load_balancing_scheme(): string {
    return `data.${this.resourceType}.${this.resourceName}.load_balancing_scheme`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get network_tier(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_tier`;
  }

  get no_automate_dns_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.no_automate_dns_zone`;
  }

  get port_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.port_range`;
  }

  get ports(): string {
    return `data.${this.resourceType}.${this.resourceName}.ports`;
  }

  get psc_connection_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.psc_connection_id`;
  }

  get psc_connection_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.psc_connection_status`;
  }

  get recreate_closed_psc(): string {
    return `data.${this.resourceType}.${this.resourceName}.recreate_closed_psc`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get service_directory_registrations(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_directory_registrations`;
  }

  get service_label(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_label`;
  }

  get service_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_name`;
  }

  get source_ip_ranges(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_ip_ranges`;
  }

  get subnetwork(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnetwork`;
  }

  get target(): string {
    return `data.${this.resourceType}.${this.resourceName}.target`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
