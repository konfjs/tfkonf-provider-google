import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubFleetArgsDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings {
  name?: string;
}

export interface GoogleGkeHubFleetArgsDefaultClusterConfigBinaryAuthorizationConfig {
  evaluation_mode?: string;
  policy_bindings?: GoogleGkeHubFleetArgsDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings[];
}

export interface GoogleGkeHubFleetArgsDefaultClusterConfigSecurityPostureConfig {
  mode?: string;
  vulnerability_mode?: string;
}

export interface GoogleGkeHubFleetArgsDefaultClusterConfig {
  binary_authorization_config?: GoogleGkeHubFleetArgsDefaultClusterConfigBinaryAuthorizationConfig;
  security_posture_config?: GoogleGkeHubFleetArgsDefaultClusterConfigSecurityPostureConfig;
}

export interface GoogleGkeHubFleetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeHubFleetArgs {
  display_name?: string;
  default_cluster_config?: GoogleGkeHubFleetArgsDefaultClusterConfig;
  timeouts?: GoogleGkeHubFleetArgsTimeouts;
}

export class google_gke_hub_fleet extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleGkeHubFleetArgs) {
    const meta = {default_cluster_config:{isBlock:true,binary_authorization_config:{isBlock:true,policy_bindings:{isBlock:true}},security_posture_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gke_hub_fleet", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get delete_time(): string {
    return `${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
