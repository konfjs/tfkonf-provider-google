import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleManagedKafkaClusterArgsCapacityConfig {
  memory_bytes: string;
  vcpu_count: string;
}

export interface GoogleManagedKafkaClusterArgsGcpConfigAccessConfigNetworkConfigs {
  subnet: string;
}

export interface GoogleManagedKafkaClusterArgsGcpConfigAccessConfig {
  network_configs: GoogleManagedKafkaClusterArgsGcpConfigAccessConfigNetworkConfigs[];
}

export interface GoogleManagedKafkaClusterArgsGcpConfig {
  kms_key?: string;
  access_config: GoogleManagedKafkaClusterArgsGcpConfigAccessConfig;
}

export interface GoogleManagedKafkaClusterArgsRebalanceConfig {
  mode?: string;
}

export interface GoogleManagedKafkaClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleManagedKafkaClusterArgs {
  cluster_id: string;
  labels?: { [key: string]: string };
  location: string;
  capacity_config: GoogleManagedKafkaClusterArgsCapacityConfig;
  gcp_config: GoogleManagedKafkaClusterArgsGcpConfig;
  rebalance_config?: GoogleManagedKafkaClusterArgsRebalanceConfig;
  timeouts?: GoogleManagedKafkaClusterArgsTimeouts;
}

export class google_managed_kafka_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleManagedKafkaClusterArgs) {
    const meta = {capacity_config:{isBlock:true},gcp_config:{isBlock:true,access_config:{isBlock:true,network_configs:{isBlock:true}}},rebalance_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_managed_kafka_cluster", resourceName);
  }

  get cluster_id(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
