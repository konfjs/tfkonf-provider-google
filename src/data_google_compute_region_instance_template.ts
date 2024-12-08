import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeRegionInstanceTemplateArgs {
  filter?: string;
  most_recent?: boolean;
  name?: string;
  project?: string;
  region?: string;
}

export class data_google_compute_region_instance_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeRegionInstanceTemplateArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_region_instance_template", resourceName);
  }

  get advanced_machine_features(): string {
    return `data.${this.resourceType}.${this.resourceName}.advanced_machine_features`;
  }

  get can_ip_forward(): string {
    return `data.${this.resourceType}.${this.resourceName}.can_ip_forward`;
  }

  get confidential_instance_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.confidential_instance_config`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get disk(): string {
    return `data.${this.resourceType}.${this.resourceName}.disk`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get guest_accelerator(): string {
    return `data.${this.resourceType}.${this.resourceName}.guest_accelerator`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_description(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_description`;
  }

  get key_revocation_action_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_revocation_action_type`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get machine_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.machine_type`;
  }

  get metadata(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata`;
  }

  get metadata_fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata_fingerprint`;
  }

  get metadata_startup_script(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata_startup_script`;
  }

  get min_cpu_platform(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_cpu_platform`;
  }

  get name_prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get network_interface(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_interface`;
  }

  get network_performance_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_performance_config`;
  }

  get reservation_affinity(): string {
    return `data.${this.resourceType}.${this.resourceName}.reservation_affinity`;
  }

  get resource_manager_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_manager_tags`;
  }

  get resource_policies(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_policies`;
  }

  get scheduling(): string {
    return `data.${this.resourceType}.${this.resourceName}.scheduling`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get service_account(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_account`;
  }

  get shielded_instance_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.shielded_instance_config`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get tags_fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags_fingerprint`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
