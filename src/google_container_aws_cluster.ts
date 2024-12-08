import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerAwsClusterArgsAuthorizationAdminGroups {
  group: string;
}

export interface GoogleContainerAwsClusterArgsAuthorizationAdminUsers {
  username: string;
}

export interface GoogleContainerAwsClusterArgsAuthorization {
  admin_groups?: GoogleContainerAwsClusterArgsAuthorizationAdminGroups[];
  admin_users: GoogleContainerAwsClusterArgsAuthorizationAdminUsers[];
}

export interface GoogleContainerAwsClusterArgsBinaryAuthorization {
}

export interface GoogleContainerAwsClusterArgsControlPlaneAwsServicesAuthentication {
  role_arn: string;
}

export interface GoogleContainerAwsClusterArgsControlPlaneConfigEncryption {
  kms_key_arn: string;
}

export interface GoogleContainerAwsClusterArgsControlPlaneDatabaseEncryption {
  kms_key_arn: string;
}

export interface GoogleContainerAwsClusterArgsControlPlaneMainVolume {
  kms_key_arn?: string;
}

export interface GoogleContainerAwsClusterArgsControlPlaneProxyConfig {
  secret_arn: string;
  secret_version: string;
}

export interface GoogleContainerAwsClusterArgsControlPlaneRootVolume {
  kms_key_arn?: string;
}

export interface GoogleContainerAwsClusterArgsControlPlaneSshConfig {
  ec2_key_pair: string;
}

export interface GoogleContainerAwsClusterArgsControlPlane {
  iam_instance_profile: string;
  security_group_ids?: string[];
  subnet_ids: string[];
  tags?: { [key: string]: string };
  version: string;
  aws_services_authentication: GoogleContainerAwsClusterArgsControlPlaneAwsServicesAuthentication;
  config_encryption: GoogleContainerAwsClusterArgsControlPlaneConfigEncryption;
  database_encryption: GoogleContainerAwsClusterArgsControlPlaneDatabaseEncryption;
  main_volume?: GoogleContainerAwsClusterArgsControlPlaneMainVolume;
  proxy_config?: GoogleContainerAwsClusterArgsControlPlaneProxyConfig;
  root_volume?: GoogleContainerAwsClusterArgsControlPlaneRootVolume;
  ssh_config?: GoogleContainerAwsClusterArgsControlPlaneSshConfig;
}

export interface GoogleContainerAwsClusterArgsFleet {
}

export interface GoogleContainerAwsClusterArgsNetworking {
  per_node_pool_sg_rules_disabled?: boolean;
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
  vpc_id: string;
}

export interface GoogleContainerAwsClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleContainerAwsClusterArgs {
  annotations?: { [key: string]: string };
  aws_region: string;
  description?: string;
  location: string;
  name: string;
  authorization: GoogleContainerAwsClusterArgsAuthorization;
  binary_authorization?: GoogleContainerAwsClusterArgsBinaryAuthorization;
  control_plane: GoogleContainerAwsClusterArgsControlPlane;
  fleet: GoogleContainerAwsClusterArgsFleet;
  networking: GoogleContainerAwsClusterArgsNetworking;
  timeouts?: GoogleContainerAwsClusterArgsTimeouts;
}

export class google_container_aws_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleContainerAwsClusterArgs) {
    const meta = {authorization:{isBlock:true,admin_groups:{isBlock:true},admin_users:{isBlock:true}},binary_authorization:{isBlock:true},control_plane:{isBlock:true,aws_services_authentication:{isBlock:true},config_encryption:{isBlock:true},database_encryption:{isBlock:true},main_volume:{isBlock:true},proxy_config:{isBlock:true},root_volume:{isBlock:true},ssh_config:{isBlock:true}},fleet:{isBlock:true},networking:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_container_aws_cluster", resourceName);
  }

  get aws_region(): string {
    return `${this.resourceType}.${this.resourceName}.aws_region`;
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
