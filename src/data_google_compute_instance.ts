import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeInstanceArgs {
  name?: string;
  project?: string;
  self_link?: string;
  zone?: string;
}

export class data_google_compute_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeInstanceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_instance", resourceName);
  }

  get advanced_machine_features(): string {
    return `data.${this.resourceType}.${this.resourceName}.advanced_machine_features`;
  }

  get allow_stopping_for_update(): string {
    return `data.${this.resourceType}.${this.resourceName}.allow_stopping_for_update`;
  }

  get attached_disk(): string {
    return `data.${this.resourceType}.${this.resourceName}.attached_disk`;
  }

  get boot_disk(): string {
    return `data.${this.resourceType}.${this.resourceName}.boot_disk`;
  }

  get can_ip_forward(): string {
    return `data.${this.resourceType}.${this.resourceName}.can_ip_forward`;
  }

  get confidential_instance_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.confidential_instance_config`;
  }

  get cpu_platform(): string {
    return `data.${this.resourceType}.${this.resourceName}.cpu_platform`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get current_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.current_status`;
  }

  get deletion_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get desired_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.desired_status`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get enable_display(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_display`;
  }

  get guest_accelerator(): string {
    return `data.${this.resourceType}.${this.resourceName}.guest_accelerator`;
  }

  get hostname(): string {
    return `data.${this.resourceType}.${this.resourceName}.hostname`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get key_revocation_action_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_revocation_action_type`;
  }

  get label_fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.label_fingerprint`;
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

  get network_interface(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_interface`;
  }

  get network_performance_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_performance_config`;
  }

  get params(): string {
    return `data.${this.resourceType}.${this.resourceName}.params`;
  }

  get reservation_affinity(): string {
    return `data.${this.resourceType}.${this.resourceName}.reservation_affinity`;
  }

  get resource_policies(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_policies`;
  }

  get scheduling(): string {
    return `data.${this.resourceType}.${this.resourceName}.scheduling`;
  }

  get scratch_disk(): string {
    return `data.${this.resourceType}.${this.resourceName}.scratch_disk`;
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
