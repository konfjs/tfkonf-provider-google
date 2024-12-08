import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeGlobalForwardingRuleArgs {
  name: string;
  project?: string;
}

export class data_google_compute_global_forwarding_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeGlobalForwardingRuleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_global_forwarding_rule", resourceName);
  }

  get base_forwarding_rule(): string {
    return `data.${this.resourceType}.${this.resourceName}.base_forwarding_rule`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get label_fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.label_fingerprint`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get load_balancing_scheme(): string {
    return `data.${this.resourceType}.${this.resourceName}.load_balancing_scheme`;
  }

  get metadata_filters(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata_filters`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get no_automate_dns_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.no_automate_dns_zone`;
  }

  get port_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.port_range`;
  }

  get psc_connection_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.psc_connection_id`;
  }

  get psc_connection_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.psc_connection_status`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get service_directory_registrations(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_directory_registrations`;
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
