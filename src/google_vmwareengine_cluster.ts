import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds {
  scale_in: number;
  scale_out: number;
}

export interface GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesCpuThresholds {
  scale_in: number;
  scale_out: number;
}

export interface GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesStorageThresholds {
  scale_in: number;
  scale_out: number;
}

export interface GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPolicies {
  autoscale_policy_id: string;
  node_type_id: string;
  scale_out_size: number;
  consumed_memory_thresholds?: GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;
  cpu_thresholds?: GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesCpuThresholds;
  storage_thresholds?: GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPoliciesStorageThresholds;
}

export interface GoogleVmwareengineClusterArgsAutoscalingSettings {
  cool_down_period?: string;
  max_cluster_node_count?: number;
  min_cluster_node_count?: number;
  autoscaling_policies: GoogleVmwareengineClusterArgsAutoscalingSettingsAutoscalingPolicies[];
}

export interface GoogleVmwareengineClusterArgsNodeTypeConfigs {
  custom_core_count?: number;
  node_count: number;
  node_type_id: string;
}

export interface GoogleVmwareengineClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVmwareengineClusterArgs {
  name: string;
  parent: string;
  autoscaling_settings?: GoogleVmwareengineClusterArgsAutoscalingSettings;
  node_type_configs?: GoogleVmwareengineClusterArgsNodeTypeConfigs[];
  timeouts?: GoogleVmwareengineClusterArgsTimeouts;
}

export class google_vmwareengine_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVmwareengineClusterArgs) {
    const meta = {autoscaling_settings:{isBlock:true,autoscaling_policies:{isBlock:true,consumed_memory_thresholds:{isBlock:true},cpu_thresholds:{isBlock:true},storage_thresholds:{isBlock:true}}},node_type_configs:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vmwareengine_cluster", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get management(): string {
    return `${this.resourceType}.${this.resourceName}.management`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }
}
