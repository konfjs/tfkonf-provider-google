import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds {
  scale_in: number;
  scale_out: number;
}

export interface GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds {
  scale_in: number;
  scale_out: number;
}

export interface GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds {
  scale_in: number;
  scale_out: number;
}

export interface GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPolicies {
  autoscale_policy_id: string;
  node_type_id: string;
  scale_out_size: number;
  consumed_memory_thresholds?: GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;
  cpu_thresholds?: GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds;
  storage_thresholds?: GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds;
}

export interface GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettings {
  cool_down_period?: string;
  max_cluster_node_count?: number;
  min_cluster_node_count?: number;
  autoscaling_policies: GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettingsAutoscalingPolicies[];
}

export interface GoogleVmwareenginePrivateCloudArgsManagementClusterNodeTypeConfigs {
  custom_core_count?: number;
  node_count: number;
  node_type_id: string;
}

export interface GoogleVmwareenginePrivateCloudArgsManagementClusterStretchedClusterConfig {
  preferred_location?: string;
  secondary_location?: string;
}

export interface GoogleVmwareenginePrivateCloudArgsManagementCluster {
  cluster_id: string;
  autoscaling_settings?: GoogleVmwareenginePrivateCloudArgsManagementClusterAutoscalingSettings;
  node_type_configs?: GoogleVmwareenginePrivateCloudArgsManagementClusterNodeTypeConfigs[];
  stretched_cluster_config?: GoogleVmwareenginePrivateCloudArgsManagementClusterStretchedClusterConfig;
}

export interface GoogleVmwareenginePrivateCloudArgsNetworkConfig {
  management_cidr: string;
  vmware_engine_network?: string;
}

export interface GoogleVmwareenginePrivateCloudArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVmwareenginePrivateCloudArgs {
  deletion_delay_hours?: number;
  description?: string;
  location: string;
  name: string;
  send_deletion_delay_hours_if_zero?: boolean;
  type?: string;
  management_cluster: GoogleVmwareenginePrivateCloudArgsManagementCluster;
  network_config: GoogleVmwareenginePrivateCloudArgsNetworkConfig;
  timeouts?: GoogleVmwareenginePrivateCloudArgsTimeouts;
}

export class google_vmwareengine_private_cloud extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleVmwareenginePrivateCloudArgs) {
    const meta = {management_cluster:{isBlock:true,autoscaling_settings:{isBlock:true,autoscaling_policies:{isBlock:true,consumed_memory_thresholds:{isBlock:true},cpu_thresholds:{isBlock:true},storage_thresholds:{isBlock:true}}},node_type_configs:{isBlock:true},stretched_cluster_config:{isBlock:true}},network_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vmwareengine_private_cloud", resourceName);
  }

  get hcx(): string {
    return `${this.resourceType}.${this.resourceName}.hcx`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get nsx(): string {
    return `${this.resourceType}.${this.resourceName}.nsx`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get vcenter(): string {
    return `${this.resourceType}.${this.resourceName}.vcenter`;
  }
}
