import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeInstanceGroupManagerArgsAllInstancesConfig {
  labels?: { [key: string]: string };
  metadata?: { [key: string]: string };
}

export interface GoogleComputeInstanceGroupManagerArgsAutoHealingPolicies {
  health_check: string;
  initial_delay_sec: number;
}

export interface GoogleComputeInstanceGroupManagerArgsInstanceLifecyclePolicy {
  default_action_on_failure?: string;
  force_update_on_repair?: string;
}

export interface GoogleComputeInstanceGroupManagerArgsNamedPort {
  name: string;
  port: number;
}

export interface GoogleComputeInstanceGroupManagerArgsStatefulDisk {
  delete_rule?: string;
  device_name: string;
}

export interface GoogleComputeInstanceGroupManagerArgsStatefulExternalIp {
  delete_rule?: string;
  interface_name?: string;
}

export interface GoogleComputeInstanceGroupManagerArgsStatefulInternalIp {
  delete_rule?: string;
  interface_name?: string;
}

export interface GoogleComputeInstanceGroupManagerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeInstanceGroupManagerArgsUpdatePolicy {
  max_surge_percent?: number;
  max_unavailable_percent?: number;
  minimal_action: string;
  most_disruptive_allowed_action?: string;
  replacement_method?: string;
  type: string;
}

export interface GoogleComputeInstanceGroupManagerArgsVersionTargetSize {
  fixed?: number;
  percent?: number;
}

export interface GoogleComputeInstanceGroupManagerArgsVersion {
  instance_template: string;
  name?: string;
  target_size?: GoogleComputeInstanceGroupManagerArgsVersionTargetSize;
}

export interface GoogleComputeInstanceGroupManagerArgs {
  base_instance_name: string;
  description?: string;
  list_managed_instances_results?: string;
  name: string;
  target_pools?: string[];
  wait_for_instances?: boolean;
  wait_for_instances_status?: string;
  all_instances_config?: GoogleComputeInstanceGroupManagerArgsAllInstancesConfig;
  auto_healing_policies?: GoogleComputeInstanceGroupManagerArgsAutoHealingPolicies;
  instance_lifecycle_policy?: GoogleComputeInstanceGroupManagerArgsInstanceLifecyclePolicy;
  named_port?: GoogleComputeInstanceGroupManagerArgsNamedPort[];
  stateful_disk?: GoogleComputeInstanceGroupManagerArgsStatefulDisk[];
  stateful_external_ip?: GoogleComputeInstanceGroupManagerArgsStatefulExternalIp[];
  stateful_internal_ip?: GoogleComputeInstanceGroupManagerArgsStatefulInternalIp[];
  timeouts?: GoogleComputeInstanceGroupManagerArgsTimeouts;
  update_policy?: GoogleComputeInstanceGroupManagerArgsUpdatePolicy;
  version: GoogleComputeInstanceGroupManagerArgsVersion[];
}

export class google_compute_instance_group_manager extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeInstanceGroupManagerArgs) {
    const meta = {all_instances_config:{isBlock:true},auto_healing_policies:{isBlock:true},instance_lifecycle_policy:{isBlock:true},named_port:{isBlock:true},stateful_disk:{isBlock:true},stateful_external_ip:{isBlock:true},stateful_internal_ip:{isBlock:true},timeouts:{isBlock:true},update_policy:{isBlock:true},version:{isBlock:true,target_size:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "google_compute_instance_group_manager", resourceName);
  }

  get base_instance_name(): string {
    return `${this.resourceType}.${this.resourceName}.base_instance_name`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
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

  get operation(): string {
    return `${this.resourceType}.${this.resourceName}.operation`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
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

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
