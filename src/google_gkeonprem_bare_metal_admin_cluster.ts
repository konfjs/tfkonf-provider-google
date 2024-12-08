import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeonpremBareMetalAdminClusterArgsClusterOperations {
  enable_application_logs?: boolean;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneApiServerArgs {
  argument: string;
  value: string;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs {
  labels?: { [key: string]: string };
  node_ip?: string;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints {
  effect?: string;
  key?: string;
  value?: string;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfig {
  labels?: { [key: string]: string };
  operating_system?: string;
  node_configs?: GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[];
  taints?: GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[];
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfig {
  node_pool_config: GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsControlPlane {
  api_server_args?: GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneApiServerArgs[];
  control_plane_node_pool_config: GoogleGkeonpremBareMetalAdminClusterArgsControlPlaneControlPlaneNodePoolConfig;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerManualLbConfig {
  enabled: boolean;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerPortConfig {
  control_plane_load_balancer_port: number;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerVipConfig {
  control_plane_vip: string;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancer {
  manual_lb_config?: GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerManualLbConfig;
  port_config: GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerPortConfig;
  vip_config: GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancerVipConfig;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsMaintenanceConfig {
  maintenance_address_cidr_blocks: string[];
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsNetworkConfigIslandModeCidr {
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsNetworkConfig {
  island_mode_cidr?: GoogleGkeonpremBareMetalAdminClusterArgsNetworkConfigIslandModeCidr;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsNodeAccessConfig {
  login_user?: string;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsNodeConfig {
  max_pods_per_node?: number;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsProxy {
  no_proxy?: string[];
  uri: string;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfigAuthorizationAdminUsers {
  username: string;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfigAuthorization {
  admin_users: GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfigAuthorizationAdminUsers[];
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfig {
  authorization?: GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfigAuthorization;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpNodeMountsConfig {
  path: string;
  storage_class: string;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpShareConfigLvpConfig {
  path: string;
  storage_class: string;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpShareConfig {
  shared_path_pv_count?: number;
  lvp_config: GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpShareConfigLvpConfig;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsStorage {
  lvp_node_mounts_config: GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpNodeMountsConfig;
  lvp_share_config: GoogleGkeonpremBareMetalAdminClusterArgsStorageLvpShareConfig;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeonpremBareMetalAdminClusterArgs {
  annotations?: { [key: string]: string };
  bare_metal_version?: string;
  description?: string;
  location: string;
  name: string;
  cluster_operations?: GoogleGkeonpremBareMetalAdminClusterArgsClusterOperations;
  control_plane?: GoogleGkeonpremBareMetalAdminClusterArgsControlPlane;
  load_balancer?: GoogleGkeonpremBareMetalAdminClusterArgsLoadBalancer;
  maintenance_config?: GoogleGkeonpremBareMetalAdminClusterArgsMaintenanceConfig;
  network_config?: GoogleGkeonpremBareMetalAdminClusterArgsNetworkConfig;
  node_access_config?: GoogleGkeonpremBareMetalAdminClusterArgsNodeAccessConfig;
  node_config?: GoogleGkeonpremBareMetalAdminClusterArgsNodeConfig;
  proxy?: GoogleGkeonpremBareMetalAdminClusterArgsProxy;
  security_config?: GoogleGkeonpremBareMetalAdminClusterArgsSecurityConfig;
  storage?: GoogleGkeonpremBareMetalAdminClusterArgsStorage;
  timeouts?: GoogleGkeonpremBareMetalAdminClusterArgsTimeouts;
}

export class google_gkeonprem_bare_metal_admin_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleGkeonpremBareMetalAdminClusterArgs) {
    const meta = {cluster_operations:{isBlock:true},control_plane:{isBlock:true,api_server_args:{isBlock:true},control_plane_node_pool_config:{isBlock:true,node_pool_config:{isBlock:true,node_configs:{isBlock:true},taints:{isBlock:true}}}},load_balancer:{isBlock:true,manual_lb_config:{isBlock:true},port_config:{isBlock:true},vip_config:{isBlock:true}},maintenance_config:{isBlock:true},network_config:{isBlock:true,island_mode_cidr:{isBlock:true}},node_access_config:{isBlock:true},node_config:{isBlock:true},proxy:{isBlock:true},security_config:{isBlock:true,authorization:{isBlock:true,admin_users:{isBlock:true}}},storage:{isBlock:true,lvp_node_mounts_config:{isBlock:true},lvp_share_config:{isBlock:true,lvp_config:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gkeonprem_bare_metal_admin_cluster", resourceName);
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
