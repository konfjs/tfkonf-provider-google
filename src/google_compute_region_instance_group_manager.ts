import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionInstanceGroupManagerArgsAllInstancesConfig {
  labels?: { [key: string]: string };
  metadata?: { [key: string]: string };
}

export interface GoogleComputeRegionInstanceGroupManagerArgsAutoHealingPolicies {
  health_check: string;
  initial_delay_sec: number;
}

export interface GoogleComputeRegionInstanceGroupManagerArgsInstanceLifecyclePolicy {
  default_action_on_failure?: string;
  force_update_on_repair?: string;
}

export interface GoogleComputeRegionInstanceGroupManagerArgsNamedPort {
  name: string;
  port: number;
}

export interface GoogleComputeRegionInstanceGroupManagerArgsStatefulDisk {
  delete_rule?: string;
  device_name: string;
}

export interface GoogleComputeRegionInstanceGroupManagerArgsStatefulExternalIp {
  delete_rule?: string;
  interface_name?: string;
}

export interface GoogleComputeRegionInstanceGroupManagerArgsStatefulInternalIp {
  delete_rule?: string;
  interface_name?: string;
}

export interface GoogleComputeRegionInstanceGroupManagerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionInstanceGroupManagerArgsUpdatePolicy {
  instance_redistribution_type?: string;
  max_surge_percent?: number;
  max_unavailable_percent?: number;
  minimal_action: string;
  most_disruptive_allowed_action?: string;
  replacement_method?: string;
  type: string;
}

export interface GoogleComputeRegionInstanceGroupManagerArgsVersionTargetSize {
  fixed?: number;
  percent?: number;
}

export interface GoogleComputeRegionInstanceGroupManagerArgsVersion {
  instance_template: string;
  name?: string;
  target_size?: GoogleComputeRegionInstanceGroupManagerArgsVersionTargetSize;
}

export interface GoogleComputeRegionInstanceGroupManagerArgs {
  base_instance_name: string;
  description?: string;
  list_managed_instances_results?: string;
  name: string;
  target_pools?: string[];
  wait_for_instances?: boolean;
  wait_for_instances_status?: string;
  all_instances_config?: GoogleComputeRegionInstanceGroupManagerArgsAllInstancesConfig;
  auto_healing_policies?: GoogleComputeRegionInstanceGroupManagerArgsAutoHealingPolicies;
  instance_lifecycle_policy?: GoogleComputeRegionInstanceGroupManagerArgsInstanceLifecyclePolicy;
  named_port?: GoogleComputeRegionInstanceGroupManagerArgsNamedPort[];
  stateful_disk?: GoogleComputeRegionInstanceGroupManagerArgsStatefulDisk[];
  stateful_external_ip?: GoogleComputeRegionInstanceGroupManagerArgsStatefulExternalIp[];
  stateful_internal_ip?: GoogleComputeRegionInstanceGroupManagerArgsStatefulInternalIp[];
  timeouts?: GoogleComputeRegionInstanceGroupManagerArgsTimeouts;
  update_policy?: GoogleComputeRegionInstanceGroupManagerArgsUpdatePolicy;
  version: GoogleComputeRegionInstanceGroupManagerArgsVersion[];
}

export class google_compute_region_instance_group_manager extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionInstanceGroupManagerArgs) {
    const meta = {all_instances_config:{isBlock:true},auto_healing_policies:{isBlock:true},instance_lifecycle_policy:{isBlock:true},named_port:{isBlock:true},stateful_disk:{isBlock:true},stateful_external_ip:{isBlock:true},stateful_internal_ip:{isBlock:true},timeouts:{isBlock:true},update_policy:{isBlock:true},version:{isBlock:true,target_size:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_instance_group_manager", resourceName);
  }

  get base_instance_name(): string {
    return `${this.resourceType}.${this.resourceName}.base_instance_name`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get distribution_policy_target_shape(): string {
    return `${this.resourceType}.${this.resourceName}.distribution_policy_target_shape`;
  }

  get distribution_policy_zones(): string {
    return `${this.resourceType}.${this.resourceName}.distribution_policy_zones`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_group(): string {
    return `${this.resourceType}.${this.resourceName}.instance_group`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get target_size(): string {
    return `${this.resourceType}.${this.resourceName}.target_size`;
  }
}
