import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEdgecontainerClusterArgsAuthorizationAdminUsers {
  username: string;
}

export interface GoogleEdgecontainerClusterArgsAuthorization {
  admin_users: GoogleEdgecontainerClusterArgsAuthorizationAdminUsers;
}

export interface GoogleEdgecontainerClusterArgsControlPlaneLocal {
  machine_filter?: string;
}

export interface GoogleEdgecontainerClusterArgsControlPlaneRemote {
}

export interface GoogleEdgecontainerClusterArgsControlPlane {
  local?: GoogleEdgecontainerClusterArgsControlPlaneLocal;
  remote?: GoogleEdgecontainerClusterArgsControlPlaneRemote;
}

export interface GoogleEdgecontainerClusterArgsControlPlaneEncryption {
}

export interface GoogleEdgecontainerClusterArgsFleet {
  project: string;
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusionsWindow {
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusions {
  window?: GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusionsWindow;
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicyWindowRecurringWindowWindow {
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicyWindowRecurringWindow {
  window?: GoogleEdgecontainerClusterArgsMaintenancePolicyWindowRecurringWindowWindow;
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicyWindow {
  recurring_window: GoogleEdgecontainerClusterArgsMaintenancePolicyWindowRecurringWindow;
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicy {
  maintenance_exclusions?: GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusions[];
  window: GoogleEdgecontainerClusterArgsMaintenancePolicyWindow;
}

export interface GoogleEdgecontainerClusterArgsNetworking {
  cluster_ipv4_cidr_blocks: string[];
  cluster_ipv6_cidr_blocks?: string[];
  services_ipv4_cidr_blocks: string[];
  services_ipv6_cidr_blocks?: string[];
}

export interface GoogleEdgecontainerClusterArgsSystemAddonsConfigIngress {
}

export interface GoogleEdgecontainerClusterArgsSystemAddonsConfig {
  ingress?: GoogleEdgecontainerClusterArgsSystemAddonsConfigIngress;
}

export interface GoogleEdgecontainerClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEdgecontainerClusterArgs {
  labels?: { [key: string]: string };
  location: string;
  name: string;
  authorization: GoogleEdgecontainerClusterArgsAuthorization;
  control_plane?: GoogleEdgecontainerClusterArgsControlPlane;
  control_plane_encryption?: GoogleEdgecontainerClusterArgsControlPlaneEncryption;
  fleet: GoogleEdgecontainerClusterArgsFleet;
  maintenance_policy?: GoogleEdgecontainerClusterArgsMaintenancePolicy;
  networking: GoogleEdgecontainerClusterArgsNetworking;
  system_addons_config?: GoogleEdgecontainerClusterArgsSystemAddonsConfig;
  timeouts?: GoogleEdgecontainerClusterArgsTimeouts;
}

export class google_edgecontainer_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleEdgecontainerClusterArgs) {
    const meta = {authorization:{isBlock:true,admin_users:{isBlock:true}},control_plane:{isBlock:true,local:{isBlock:true},remote:{isBlock:true}},control_plane_encryption:{isBlock:true},fleet:{isBlock:true},maintenance_policy:{isBlock:true,maintenance_exclusions:{isBlock:true,window:{isBlock:true}},window:{isBlock:true,recurring_window:{isBlock:true,window:{isBlock:true}}}},networking:{isBlock:true},system_addons_config:{isBlock:true,ingress:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_edgecontainer_cluster", resourceName);
  }

  get cluster_ca_certificate(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_ca_certificate`;
  }

  get control_plane_version(): string {
    return `${this.resourceType}.${this.resourceName}.control_plane_version`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get default_max_pods_per_node(): string {
    return `${this.resourceType}.${this.resourceName}.default_max_pods_per_node`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get external_load_balancer_ipv4_address_pools(): string {
    return `${this.resourceType}.${this.resourceName}.external_load_balancer_ipv4_address_pools`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get maintenance_events(): string {
    return `${this.resourceType}.${this.resourceName}.maintenance_events`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get node_version(): string {
    return `${this.resourceType}.${this.resourceName}.node_version`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get release_channel(): string {
    return `${this.resourceType}.${this.resourceName}.release_channel`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get target_version(): string {
    return `${this.resourceType}.${this.resourceName}.target_version`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
