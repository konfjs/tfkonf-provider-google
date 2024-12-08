import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerNodePoolArgsAutoscaling {
  max_node_count?: number;
  min_node_count?: number;
  total_max_node_count?: number;
  total_min_node_count?: number;
}

export interface GoogleContainerNodePoolArgsManagement {
  auto_repair?: boolean;
  auto_upgrade?: boolean;
}

export interface GoogleContainerNodePoolArgsNetworkConfigAdditionalNodeNetworkConfigs {
  network?: string;
  subnetwork?: string;
}

export interface GoogleContainerNodePoolArgsNetworkConfigAdditionalPodNetworkConfigs {
  secondary_pod_range?: string;
  subnetwork?: string;
}

export interface GoogleContainerNodePoolArgsNetworkConfigNetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}

export interface GoogleContainerNodePoolArgsNetworkConfigPodCidrOverprovisionConfig {
  disabled: boolean;
}

export interface GoogleContainerNodePoolArgsNetworkConfig {
  create_pod_range?: boolean;
  additional_node_network_configs?: GoogleContainerNodePoolArgsNetworkConfigAdditionalNodeNetworkConfigs[];
  additional_pod_network_configs?: GoogleContainerNodePoolArgsNetworkConfigAdditionalPodNetworkConfigs[];
  network_performance_config?: GoogleContainerNodePoolArgsNetworkConfigNetworkPerformanceConfig;
  pod_cidr_overprovision_config?: GoogleContainerNodePoolArgsNetworkConfigPodCidrOverprovisionConfig;
}

export interface GoogleContainerNodePoolArgsNodeConfigAdvancedMachineFeatures {
  enable_nested_virtualization?: boolean;
  threads_per_core: number;
}

export interface GoogleContainerNodePoolArgsNodeConfigConfidentialNodes {
  enabled: boolean;
}

export interface GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  secret_uri: string;
}

export interface GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  fqdns: string[];
  gcp_secret_manager_certificate_config: GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}

export interface GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfig {
  enabled: boolean;
  certificate_authority_domain_config?: GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[];
}

export interface GoogleContainerNodePoolArgsNodeConfigContainerdConfig {
  private_registry_access_config?: GoogleContainerNodePoolArgsNodeConfigContainerdConfigPrivateRegistryAccessConfig;
}

export interface GoogleContainerNodePoolArgsNodeConfigEphemeralStorageLocalSsdConfig {
  local_ssd_count: number;
}

export interface GoogleContainerNodePoolArgsNodeConfigFastSocket {
  enabled: boolean;
}

export interface GoogleContainerNodePoolArgsNodeConfigGcfsConfig {
  enabled: boolean;
}

export interface GoogleContainerNodePoolArgsNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  gpu_driver_version: string;
}

export interface GoogleContainerNodePoolArgsNodeConfigGuestAcceleratorGpuSharingConfig {
  gpu_sharing_strategy: string;
  max_shared_clients_per_gpu: number;
}

export interface GoogleContainerNodePoolArgsNodeConfigGuestAccelerator {
  count: number;
  gpu_partition_size?: string;
  type: string;
  gpu_driver_installation_config?: GoogleContainerNodePoolArgsNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
  gpu_sharing_config?: GoogleContainerNodePoolArgsNodeConfigGuestAcceleratorGpuSharingConfig;
}

export interface GoogleContainerNodePoolArgsNodeConfigGvnic {
  enabled: boolean;
}

export interface GoogleContainerNodePoolArgsNodeConfigHostMaintenancePolicy {
  maintenance_interval: string;
}

export interface GoogleContainerNodePoolArgsNodeConfigKubeletConfig {
  cpu_cfs_quota?: boolean;
  cpu_cfs_quota_period?: string;
  cpu_manager_policy?: string;
  pod_pids_limit?: number;
}

export interface GoogleContainerNodePoolArgsNodeConfigLinuxNodeConfigHugepagesConfig {
  hugepage_size_1g?: number;
  hugepage_size_2m?: number;
}

export interface GoogleContainerNodePoolArgsNodeConfigLinuxNodeConfig {
  sysctls?: { [key: string]: string };
  hugepages_config?: GoogleContainerNodePoolArgsNodeConfigLinuxNodeConfigHugepagesConfig;
}

export interface GoogleContainerNodePoolArgsNodeConfigLocalNvmeSsdBlockConfig {
  local_ssd_count: number;
}

export interface GoogleContainerNodePoolArgsNodeConfigReservationAffinity {
  consume_reservation_type: string;
  key?: string;
  values?: string[];
}

export interface GoogleContainerNodePoolArgsNodeConfigSecondaryBootDisks {
  disk_image: string;
  mode?: string;
}

export interface GoogleContainerNodePoolArgsNodeConfigShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
}

export interface GoogleContainerNodePoolArgsNodeConfigSoleTenantConfigNodeAffinity {
  key: string;
  operator: string;
  values: string[];
}

export interface GoogleContainerNodePoolArgsNodeConfigSoleTenantConfig {
  node_affinity: GoogleContainerNodePoolArgsNodeConfigSoleTenantConfigNodeAffinity[];
}

export interface GoogleContainerNodePoolArgsNodeConfigTaint {
  effect: string;
  key: string;
  value: string;
}

export interface GoogleContainerNodePoolArgsNodeConfigWorkloadMetadataConfig {
  mode: string;
}

export interface GoogleContainerNodePoolArgsNodeConfig {
  boot_disk_kms_key?: string;
  enable_confidential_storage?: boolean;
  node_group?: string;
  preemptible?: boolean;
  resource_labels?: { [key: string]: string };
  resource_manager_tags?: { [key: string]: string };
  spot?: boolean;
  storage_pools?: string[];
  tags?: string[];
  advanced_machine_features?: GoogleContainerNodePoolArgsNodeConfigAdvancedMachineFeatures;
  confidential_nodes?: GoogleContainerNodePoolArgsNodeConfigConfidentialNodes;
  containerd_config?: GoogleContainerNodePoolArgsNodeConfigContainerdConfig;
  ephemeral_storage_local_ssd_config?: GoogleContainerNodePoolArgsNodeConfigEphemeralStorageLocalSsdConfig;
  fast_socket?: GoogleContainerNodePoolArgsNodeConfigFastSocket;
  gcfs_config?: GoogleContainerNodePoolArgsNodeConfigGcfsConfig;
  guest_accelerator?: GoogleContainerNodePoolArgsNodeConfigGuestAccelerator[];
  gvnic?: GoogleContainerNodePoolArgsNodeConfigGvnic;
  host_maintenance_policy?: GoogleContainerNodePoolArgsNodeConfigHostMaintenancePolicy;
  kubelet_config?: GoogleContainerNodePoolArgsNodeConfigKubeletConfig;
  linux_node_config?: GoogleContainerNodePoolArgsNodeConfigLinuxNodeConfig;
  local_nvme_ssd_block_config?: GoogleContainerNodePoolArgsNodeConfigLocalNvmeSsdBlockConfig;
  reservation_affinity?: GoogleContainerNodePoolArgsNodeConfigReservationAffinity;
  secondary_boot_disks?: GoogleContainerNodePoolArgsNodeConfigSecondaryBootDisks[];
  shielded_instance_config?: GoogleContainerNodePoolArgsNodeConfigShieldedInstanceConfig;
  sole_tenant_config?: GoogleContainerNodePoolArgsNodeConfigSoleTenantConfig;
  taint?: GoogleContainerNodePoolArgsNodeConfigTaint[];
  workload_metadata_config?: GoogleContainerNodePoolArgsNodeConfigWorkloadMetadataConfig;
}

export interface GoogleContainerNodePoolArgsPlacementPolicy {
  policy_name?: string;
  tpu_topology?: string;
  type: string;
}

export interface GoogleContainerNodePoolArgsQueuedProvisioning {
  enabled: boolean;
}

export interface GoogleContainerNodePoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleContainerNodePoolArgsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
}

export interface GoogleContainerNodePoolArgsUpgradeSettingsBlueGreenSettings {
  standard_rollout_policy: GoogleContainerNodePoolArgsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export interface GoogleContainerNodePoolArgsUpgradeSettings {
  strategy?: string;
  blue_green_settings?: GoogleContainerNodePoolArgsUpgradeSettingsBlueGreenSettings;
}

export interface GoogleContainerNodePoolArgs {
  cluster: string;
  autoscaling?: GoogleContainerNodePoolArgsAutoscaling;
  management?: GoogleContainerNodePoolArgsManagement;
  network_config?: GoogleContainerNodePoolArgsNetworkConfig;
  node_config?: GoogleContainerNodePoolArgsNodeConfig;
  placement_policy?: GoogleContainerNodePoolArgsPlacementPolicy;
  queued_provisioning?: GoogleContainerNodePoolArgsQueuedProvisioning;
  timeouts?: GoogleContainerNodePoolArgsTimeouts;
  upgrade_settings?: GoogleContainerNodePoolArgsUpgradeSettings;
}

export class google_container_node_pool extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleContainerNodePoolArgs) {
    const meta = {autoscaling:{isBlock:true},management:{isBlock:true},network_config:{isBlock:true,additional_node_network_configs:{isBlock:true},additional_pod_network_configs:{isBlock:true},network_performance_config:{isBlock:true},pod_cidr_overprovision_config:{isBlock:true}},node_config:{isBlock:true,advanced_machine_features:{isBlock:true},confidential_nodes:{isBlock:true},containerd_config:{isBlock:true,private_registry_access_config:{isBlock:true,certificate_authority_domain_config:{isBlock:true,gcp_secret_manager_certificate_config:{isBlock:true}}}},ephemeral_storage_local_ssd_config:{isBlock:true},fast_socket:{isBlock:true},gcfs_config:{isBlock:true},guest_accelerator:{isBlock:true,gpu_driver_installation_config:{isBlock:true},gpu_sharing_config:{isBlock:true}},gvnic:{isBlock:true},host_maintenance_policy:{isBlock:true},kubelet_config:{isBlock:true},linux_node_config:{isBlock:true,hugepages_config:{isBlock:true}},local_nvme_ssd_block_config:{isBlock:true},reservation_affinity:{isBlock:true},secondary_boot_disks:{isBlock:true},shielded_instance_config:{isBlock:true},sole_tenant_config:{isBlock:true,node_affinity:{isBlock:true}},taint:{isBlock:true},workload_metadata_config:{isBlock:true}},placement_policy:{isBlock:true},queued_provisioning:{isBlock:true},timeouts:{isBlock:true},upgrade_settings:{isBlock:true,blue_green_settings:{isBlock:true,standard_rollout_policy:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "google_container_node_pool", resourceName);
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get initial_node_count(): string {
    return `${this.resourceType}.${this.resourceName}.initial_node_count`;
  }

  get instance_group_urls(): string {
    return `${this.resourceType}.${this.resourceName}.instance_group_urls`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get managed_instance_group_urls(): string {
    return `${this.resourceType}.${this.resourceName}.managed_instance_group_urls`;
  }

  get max_pods_per_node(): string {
    return `${this.resourceType}.${this.resourceName}.max_pods_per_node`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get node_count(): string {
    return `${this.resourceType}.${this.resourceName}.node_count`;
  }

  get node_locations(): string {
    return `${this.resourceType}.${this.resourceName}.node_locations`;
  }

  get operation(): string {
    return `${this.resourceType}.${this.resourceName}.operation`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
