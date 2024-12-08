import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerAttachedClusterArgsAuthorization {
  admin_groups?: string[];
  admin_users?: string[];
}

export interface GoogleContainerAttachedClusterArgsBinaryAuthorization {
  evaluation_mode?: string;
}

export interface GoogleContainerAttachedClusterArgsFleet {
  project: string;
}

export interface GoogleContainerAttachedClusterArgsLoggingConfigComponentConfig {
  enable_components?: string[];
}

export interface GoogleContainerAttachedClusterArgsLoggingConfig {
  component_config?: GoogleContainerAttachedClusterArgsLoggingConfigComponentConfig;
}

export interface GoogleContainerAttachedClusterArgsMonitoringConfigManagedPrometheusConfig {
  enabled?: boolean;
}

export interface GoogleContainerAttachedClusterArgsMonitoringConfig {
  managed_prometheus_config?: GoogleContainerAttachedClusterArgsMonitoringConfigManagedPrometheusConfig;
}

export interface GoogleContainerAttachedClusterArgsOidcConfig {
  issuer_url: string;
  jwks?: string;
}

export interface GoogleContainerAttachedClusterArgsProxyConfigKubernetesSecret {
  name: string;
  namespace: string;
}

export interface GoogleContainerAttachedClusterArgsProxyConfig {
  kubernetes_secret?: GoogleContainerAttachedClusterArgsProxyConfigKubernetesSecret;
}

export interface GoogleContainerAttachedClusterArgsSecurityPostureConfig {
  vulnerability_mode: string;
}

export interface GoogleContainerAttachedClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleContainerAttachedClusterArgs {
  annotations?: { [key: string]: string };
  deletion_policy?: string;
  description?: string;
  distribution: string;
  location: string;
  name: string;
  platform_version: string;
  authorization?: GoogleContainerAttachedClusterArgsAuthorization;
  binary_authorization?: GoogleContainerAttachedClusterArgsBinaryAuthorization;
  fleet: GoogleContainerAttachedClusterArgsFleet;
  logging_config?: GoogleContainerAttachedClusterArgsLoggingConfig;
  monitoring_config?: GoogleContainerAttachedClusterArgsMonitoringConfig;
  oidc_config: GoogleContainerAttachedClusterArgsOidcConfig;
  proxy_config?: GoogleContainerAttachedClusterArgsProxyConfig;
  security_posture_config?: GoogleContainerAttachedClusterArgsSecurityPostureConfig;
  timeouts?: GoogleContainerAttachedClusterArgsTimeouts;
}

export class google_container_attached_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleContainerAttachedClusterArgs) {
    const meta = {authorization:{isBlock:true},binary_authorization:{isBlock:true},fleet:{isBlock:true},logging_config:{isBlock:true,component_config:{isBlock:true}},monitoring_config:{isBlock:true,managed_prometheus_config:{isBlock:true}},oidc_config:{isBlock:true},proxy_config:{isBlock:true,kubernetes_secret:{isBlock:true}},security_posture_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_container_attached_cluster", resourceName);
  }

  get cluster_region(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_region`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get distribution(): string {
    return `${this.resourceType}.${this.resourceName}.distribution`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get errors(): string {
    return `${this.resourceType}.${this.resourceName}.errors`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kubernetes_version(): string {
    return `${this.resourceType}.${this.resourceName}.kubernetes_version`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get platform_version(): string {
    return `${this.resourceType}.${this.resourceName}.platform_version`;
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
