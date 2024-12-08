import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeonpremBareMetalClusterArgsBinaryAuthorization {
  evaluation_mode?: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsClusterOperations {
  enable_application_logs?: boolean;
}

export interface GoogleGkeonpremBareMetalClusterArgsControlPlaneApiServerArgs {
  argument: string;
  value: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs {
  labels?: { [key: string]: string };
  node_ip?: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints {
  effect?: string;
  key?: string;
  value?: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfig {
  operating_system?: string;
  node_configs?: GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[];
  taints?: GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[];
}

export interface GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfig {
  node_pool_config: GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
}

export interface GoogleGkeonpremBareMetalClusterArgsControlPlane {
  api_server_args?: GoogleGkeonpremBareMetalClusterArgsControlPlaneApiServerArgs[];
  control_plane_node_pool_config: GoogleGkeonpremBareMetalClusterArgsControlPlaneControlPlaneNodePoolConfig;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigAddressPools {
  addresses: string[];
  avoid_buggy_ips?: boolean;
  manual_assign?: string;
  pool: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigBgpPeerConfigs {
  asn: number;
  control_plane_nodes?: string[];
  ip_address: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig {
  registry_burst?: number;
  registry_pull_qps?: number;
  serialize_image_pulls_disabled?: boolean;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs {
  labels?: { [key: string]: string };
  node_ip?: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints {
  effect?: string;
  key?: string;
  value?: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig {
  labels?: { [key: string]: string };
  operating_system?: string;
  kubelet_config?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig;
  node_configs?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs[];
  taints?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints[];
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig {
  node_pool_config?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfig {
  asn: number;
  address_pools: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigAddressPools[];
  bgp_peer_configs: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigBgpPeerConfigs[];
  load_balancer_node_pool_config?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerManualLbConfig {
  enabled: boolean;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigAddressPools {
  addresses: string[];
  avoid_buggy_ips?: boolean;
  manual_assign?: boolean;
  pool: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs {
  labels?: { [key: string]: string };
  node_ip?: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints {
  effect?: string;
  key?: string;
  value?: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig {
  node_configs?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs[];
  taints?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints[];
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig {
  node_pool_config?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfig {
  address_pools: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigAddressPools[];
  load_balancer_node_pool_config?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerPortConfig {
  control_plane_load_balancer_port: number;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancerVipConfig {
  control_plane_vip: string;
  ingress_vip: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsLoadBalancer {
  bgp_lb_config?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerBgpLbConfig;
  manual_lb_config?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerManualLbConfig;
  metal_lb_config?: GoogleGkeonpremBareMetalClusterArgsLoadBalancerMetalLbConfig;
  port_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerPortConfig;
  vip_config: GoogleGkeonpremBareMetalClusterArgsLoadBalancerVipConfig;
}

export interface GoogleGkeonpremBareMetalClusterArgsMaintenanceConfig {
  maintenance_address_cidr_blocks: string[];
}

export interface GoogleGkeonpremBareMetalClusterArgsNetworkConfigIslandModeCidr {
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
}

export interface GoogleGkeonpremBareMetalClusterArgsNetworkConfigMultipleNetworkInterfacesConfig {
  enabled?: boolean;
}

export interface GoogleGkeonpremBareMetalClusterArgsNetworkConfigSrIovConfig {
  enabled?: boolean;
}

export interface GoogleGkeonpremBareMetalClusterArgsNetworkConfig {
  advanced_networking?: boolean;
  island_mode_cidr?: GoogleGkeonpremBareMetalClusterArgsNetworkConfigIslandModeCidr;
  multiple_network_interfaces_config?: GoogleGkeonpremBareMetalClusterArgsNetworkConfigMultipleNetworkInterfacesConfig;
  sr_iov_config?: GoogleGkeonpremBareMetalClusterArgsNetworkConfigSrIovConfig;
}

export interface GoogleGkeonpremBareMetalClusterArgsNodeAccessConfig {
}

export interface GoogleGkeonpremBareMetalClusterArgsNodeConfig {
}

export interface GoogleGkeonpremBareMetalClusterArgsOsEnvironmentConfig {
  package_repo_excluded: boolean;
}

export interface GoogleGkeonpremBareMetalClusterArgsProxy {
  no_proxy?: string[];
  uri: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsSecurityConfigAuthorizationAdminUsers {
  username: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsSecurityConfigAuthorization {
  admin_users: GoogleGkeonpremBareMetalClusterArgsSecurityConfigAuthorizationAdminUsers[];
}

export interface GoogleGkeonpremBareMetalClusterArgsSecurityConfig {
  authorization?: GoogleGkeonpremBareMetalClusterArgsSecurityConfigAuthorization;
}

export interface GoogleGkeonpremBareMetalClusterArgsStorageLvpNodeMountsConfig {
  path: string;
  storage_class: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsStorageLvpShareConfigLvpConfig {
  path: string;
  storage_class: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsStorageLvpShareConfig {
  shared_path_pv_count?: number;
  lvp_config: GoogleGkeonpremBareMetalClusterArgsStorageLvpShareConfigLvpConfig;
}

export interface GoogleGkeonpremBareMetalClusterArgsStorage {
  lvp_node_mounts_config: GoogleGkeonpremBareMetalClusterArgsStorageLvpNodeMountsConfig;
  lvp_share_config: GoogleGkeonpremBareMetalClusterArgsStorageLvpShareConfig;
}

export interface GoogleGkeonpremBareMetalClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeonpremBareMetalClusterArgsUpgradePolicy {
  policy?: string;
}

export interface GoogleGkeonpremBareMetalClusterArgs {
  admin_cluster_membership: string;
  annotations?: { [key: string]: string };
  bare_metal_version: string;
  description?: string;
  location: string;
  name: string;
  binary_authorization?: GoogleGkeonpremBareMetalClusterArgsBinaryAuthorization;
  cluster_operations?: GoogleGkeonpremBareMetalClusterArgsClusterOperations;
  control_plane: GoogleGkeonpremBareMetalClusterArgsControlPlane;
  load_balancer: GoogleGkeonpremBareMetalClusterArgsLoadBalancer;
  maintenance_config?: GoogleGkeonpremBareMetalClusterArgsMaintenanceConfig;
  network_config: GoogleGkeonpremBareMetalClusterArgsNetworkConfig;
  node_access_config?: GoogleGkeonpremBareMetalClusterArgsNodeAccessConfig;
  node_config?: GoogleGkeonpremBareMetalClusterArgsNodeConfig;
  os_environment_config?: GoogleGkeonpremBareMetalClusterArgsOsEnvironmentConfig;
  proxy?: GoogleGkeonpremBareMetalClusterArgsProxy;
  security_config?: GoogleGkeonpremBareMetalClusterArgsSecurityConfig;
  storage: GoogleGkeonpremBareMetalClusterArgsStorage;
  timeouts?: GoogleGkeonpremBareMetalClusterArgsTimeouts;
  upgrade_policy?: GoogleGkeonpremBareMetalClusterArgsUpgradePolicy;
}

export class google_gkeonprem_bare_metal_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleGkeonpremBareMetalClusterArgs) {
    const meta = {binary_authorization:{isBlock:true},cluster_operations:{isBlock:true},control_plane:{isBlock:true,api_server_args:{isBlock:true},control_plane_node_pool_config:{isBlock:true,node_pool_config:{isBlock:true,node_configs:{isBlock:true},taints:{isBlock:true}}}},load_balancer:{isBlock:true,bgp_lb_config:{isBlock:true,address_pools:{isBlock:true},bgp_peer_configs:{isBlock:true},load_balancer_node_pool_config:{isBlock:true,node_pool_config:{isBlock:true,kubelet_config:{isBlock:true},node_configs:{isBlock:true},taints:{isBlock:true}}}},manual_lb_config:{isBlock:true},metal_lb_config:{isBlock:true,address_pools:{isBlock:true},load_balancer_node_pool_config:{isBlock:true,node_pool_config:{isBlock:true,node_configs:{isBlock:true},taints:{isBlock:true}}}},port_config:{isBlock:true},vip_config:{isBlock:true}},maintenance_config:{isBlock:true},network_config:{isBlock:true,island_mode_cidr:{isBlock:true},multiple_network_interfaces_config:{isBlock:true},sr_iov_config:{isBlock:true}},node_access_config:{isBlock:true},node_config:{isBlock:true},os_environment_config:{isBlock:true},proxy:{isBlock:true},security_config:{isBlock:true,authorization:{isBlock:true,admin_users:{isBlock:true}}},storage:{isBlock:true,lvp_node_mounts_config:{isBlock:true},lvp_share_config:{isBlock:true,lvp_config:{isBlock:true}}},timeouts:{isBlock:true},upgrade_policy:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gkeonprem_bare_metal_cluster", resourceName);
  }

  get admin_cluster_membership(): string {
    return `${this.resourceType}.${this.resourceName}.admin_cluster_membership`;
  }

  get bare_metal_version(): string {
    return `${this.resourceType}.${this.resourceName}.bare_metal_version`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get delete_time(): string {
    return `${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get fleet(): string {
    return `${this.resourceType}.${this.resourceName}.fleet`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get local_name(): string {
    return `${this.resourceType}.${this.resourceName}.local_name`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get validation_check(): string {
    return `${this.resourceType}.${this.resourceName}.validation_check`;
  }
}
