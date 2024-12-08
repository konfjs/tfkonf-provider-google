import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleContainerClusterArgs {
  location?: string;
  name: string;
  project?: string;
}

export class data_google_container_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleContainerClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_container_cluster", resourceName);
  }

  get addons_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.addons_config`;
  }

  get allow_net_admin(): string {
    return `data.${this.resourceType}.${this.resourceName}.allow_net_admin`;
  }

  get authenticator_groups_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.authenticator_groups_config`;
  }

  get binary_authorization(): string {
    return `data.${this.resourceType}.${this.resourceName}.binary_authorization`;
  }

  get cluster_autoscaling(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_autoscaling`;
  }

  get cluster_ipv4_cidr(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_ipv4_cidr`;
  }

  get confidential_nodes(): string {
    return `data.${this.resourceType}.${this.resourceName}.confidential_nodes`;
  }

  get control_plane_endpoints_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.control_plane_endpoints_config`;
  }

  get cost_management_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.cost_management_config`;
  }

  get database_encryption(): string {
    return `data.${this.resourceType}.${this.resourceName}.database_encryption`;
  }

  get datapath_provider(): string {
    return `data.${this.resourceType}.${this.resourceName}.datapath_provider`;
  }

  get default_max_pods_per_node(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_max_pods_per_node`;
  }

  get default_snat_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_snat_status`;
  }

  get deletion_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get dns_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_config`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get enable_autopilot(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_autopilot`;
  }

  get enable_cilium_clusterwide_network_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_cilium_clusterwide_network_policy`;
  }

  get enable_intranode_visibility(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_intranode_visibility`;
  }

  get enable_k8s_beta_apis(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_k8s_beta_apis`;
  }

  get enable_kubernetes_alpha(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_kubernetes_alpha`;
  }

  get enable_l4_ilb_subsetting(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_l4_ilb_subsetting`;
  }

  get enable_legacy_abac(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_legacy_abac`;
  }

  get enable_multi_networking(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_multi_networking`;
  }

  get enable_shielded_nodes(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_shielded_nodes`;
  }

  get enable_tpu(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_tpu`;
  }

  get endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get fleet(): string {
    return `data.${this.resourceType}.${this.resourceName}.fleet`;
  }

  get gateway_api_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.gateway_api_config`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_service_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_service_config`;
  }

  get initial_node_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.initial_node_count`;
  }

  get ip_allocation_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_allocation_policy`;
  }

  get label_fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.label_fingerprint`;
  }

  get logging_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.logging_config`;
  }

  get logging_service(): string {
    return `data.${this.resourceType}.${this.resourceName}.logging_service`;
  }

  get maintenance_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_policy`;
  }

  get master_auth(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_auth`;
  }

  get master_authorized_networks_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_authorized_networks_config`;
  }

  get master_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_version`;
  }

  get mesh_certificates(): string {
    return `data.${this.resourceType}.${this.resourceName}.mesh_certificates`;
  }

  get min_master_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_master_version`;
  }

  get monitoring_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.monitoring_config`;
  }

  get monitoring_service(): string {
    return `data.${this.resourceType}.${this.resourceName}.monitoring_service`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get network_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_policy`;
  }

  get networking_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.networking_mode`;
  }

  get node_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_config`;
  }

  get node_locations(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_locations`;
  }

  get node_pool(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_pool`;
  }

  get node_pool_auto_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_pool_auto_config`;
  }

  get node_pool_defaults(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_pool_defaults`;
  }

  get node_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_version`;
  }

  get notification_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.notification_config`;
  }

  get operation(): string {
    return `data.${this.resourceType}.${this.resourceName}.operation`;
  }

  get private_cluster_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_cluster_config`;
  }

  get private_ipv6_google_access(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_ipv6_google_access`;
  }

  get release_channel(): string {
    return `data.${this.resourceType}.${this.resourceName}.release_channel`;
  }

  get remove_default_node_pool(): string {
    return `data.${this.resourceType}.${this.resourceName}.remove_default_node_pool`;
  }

  get resource_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_labels`;
  }

  get resource_usage_export_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_usage_export_config`;
  }

  get secret_manager_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_manager_config`;
  }

  get security_posture_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_posture_config`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get service_external_ips_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_external_ips_config`;
  }

  get services_ipv4_cidr(): string {
    return `data.${this.resourceType}.${this.resourceName}.services_ipv4_cidr`;
  }

  get subnetwork(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnetwork`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get tpu_ipv4_cidr_block(): string {
    return `data.${this.resourceType}.${this.resourceName}.tpu_ipv4_cidr_block`;
  }

  get user_managed_keys_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_managed_keys_config`;
  }

  get vertical_pod_autoscaling(): string {
    return `data.${this.resourceType}.${this.resourceName}.vertical_pod_autoscaling`;
  }

  get workload_identity_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.workload_identity_config`;
  }
}
