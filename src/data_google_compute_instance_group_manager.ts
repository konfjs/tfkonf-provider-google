import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeInstanceGroupManagerArgs {
  name?: string;
  project?: string;
  self_link?: string;
  zone?: string;
}

export class data_google_compute_instance_group_manager extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeInstanceGroupManagerArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_instance_group_manager", resourceName);
  }

  get all_instances_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.all_instances_config`;
  }

  get auto_healing_policies(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_healing_policies`;
  }

  get base_instance_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.base_instance_name`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_group(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_group`;
  }

  get instance_lifecycle_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_lifecycle_policy`;
  }

  get list_managed_instances_results(): string {
    return `data.${this.resourceType}.${this.resourceName}.list_managed_instances_results`;
  }

  get named_port(): string {
    return `data.${this.resourceType}.${this.resourceName}.named_port`;
  }

  get operation(): string {
    return `data.${this.resourceType}.${this.resourceName}.operation`;
  }

  get stateful_disk(): string {
    return `data.${this.resourceType}.${this.resourceName}.stateful_disk`;
  }

  get stateful_external_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.stateful_external_ip`;
  }

  get stateful_internal_ip(): string {
    return `data.${this.resourceType}.${this.resourceName}.stateful_internal_ip`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get target_pools(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_pools`;
  }

  get target_size(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_size`;
  }

  get update_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_policy`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }

  get wait_for_instances(): string {
    return `data.${this.resourceType}.${this.resourceName}.wait_for_instances`;
  }

  get wait_for_instances_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.wait_for_instances_status`;
  }
}
