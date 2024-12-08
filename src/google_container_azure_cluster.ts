import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerAzureClusterArgsAuthorizationAdminGroups {
  group: string;
}

export interface GoogleContainerAzureClusterArgsAuthorizationAdminUsers {
  username: string;
}

export interface GoogleContainerAzureClusterArgsAuthorization {
  admin_groups?: GoogleContainerAzureClusterArgsAuthorizationAdminGroups[];
  admin_users: GoogleContainerAzureClusterArgsAuthorizationAdminUsers[];
}

export interface GoogleContainerAzureClusterArgsAzureServicesAuthentication {
  application_id: string;
  tenant_id: string;
}

export interface GoogleContainerAzureClusterArgsControlPlaneDatabaseEncryption {
  key_id: string;
}

export interface GoogleContainerAzureClusterArgsControlPlaneMainVolume {
}

export interface GoogleContainerAzureClusterArgsControlPlaneProxyConfig {
  resource_group_id: string;
  secret_id: string;
}

export interface GoogleContainerAzureClusterArgsControlPlaneReplicaPlacements {
  azure_availability_zone: string;
  subnet_id: string;
}

export interface GoogleContainerAzureClusterArgsControlPlaneRootVolume {
}

export interface GoogleContainerAzureClusterArgsControlPlaneSshConfig {
  authorized_key: string;
}

export interface GoogleContainerAzureClusterArgsControlPlane {
  subnet_id: string;
  tags?: { [key: string]: string };
  version: string;
  database_encryption?: GoogleContainerAzureClusterArgsControlPlaneDatabaseEncryption;
  main_volume?: GoogleContainerAzureClusterArgsControlPlaneMainVolume;
  proxy_config?: GoogleContainerAzureClusterArgsControlPlaneProxyConfig;
  replica_placements?: GoogleContainerAzureClusterArgsControlPlaneReplicaPlacements[];
  root_volume?: GoogleContainerAzureClusterArgsControlPlaneRootVolume;
  ssh_config: GoogleContainerAzureClusterArgsControlPlaneSshConfig;
}

export interface GoogleContainerAzureClusterArgsFleet {
}

export interface GoogleContainerAzureClusterArgsNetworking {
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
  virtual_network_id: string;
}

export interface GoogleContainerAzureClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleContainerAzureClusterArgs {
  annotations?: { [key: string]: string };
  azure_region: string;
  client?: string;
  description?: string;
  location: string;
  name: string;
  resource_group_id: string;
  authorization: GoogleContainerAzureClusterArgsAuthorization;
  azure_services_authentication?: GoogleContainerAzureClusterArgsAzureServicesAuthentication;
  control_plane: GoogleContainerAzureClusterArgsControlPlane;
  fleet: GoogleContainerAzureClusterArgsFleet;
  networking: GoogleContainerAzureClusterArgsNetworking;
  timeouts?: GoogleContainerAzureClusterArgsTimeouts;
}

export class google_container_azure_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleContainerAzureClusterArgs) {
    const meta = {authorization:{isBlock:true,admin_groups:{isBlock:true},admin_users:{isBlock:true}},azure_services_authentication:{isBlock:true},control_plane:{isBlock:true,database_encryption:{isBlock:true},main_volume:{isBlock:true},proxy_config:{isBlock:true},replica_placements:{isBlock:true},root_volume:{isBlock:true},ssh_config:{isBlock:true}},fleet:{isBlock:true},networking:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_container_azure_cluster", resourceName);
  }

  get azure_region(): string {
    return `${this.resourceType}.${this.resourceName}.azure_region`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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

  get resource_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.resource_group_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get workload_identity_config(): string {
    return `${this.resourceType}.${this.resourceName}.workload_identity_config`;
  }
}
