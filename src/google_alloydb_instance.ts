import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAlloydbInstanceArgsClientConnectionConfigSslConfig {
}

export interface GoogleAlloydbInstanceArgsClientConnectionConfig {
  require_connectors?: boolean;
  ssl_config?: GoogleAlloydbInstanceArgsClientConnectionConfigSslConfig;
}

export interface GoogleAlloydbInstanceArgsMachineConfig {
}

export interface GoogleAlloydbInstanceArgsNetworkConfigAuthorizedExternalNetworks {
  cidr_range?: string;
}

export interface GoogleAlloydbInstanceArgsNetworkConfig {
  enable_outbound_public_ip?: boolean;
  enable_public_ip?: boolean;
  authorized_external_networks?: GoogleAlloydbInstanceArgsNetworkConfigAuthorizedExternalNetworks[];
}

export interface GoogleAlloydbInstanceArgsPscInstanceConfig {
  allowed_consumer_projects?: string[];
}

export interface GoogleAlloydbInstanceArgsQueryInsightsConfig {
  query_plans_per_minute?: number;
  query_string_length?: number;
  record_application_tags?: boolean;
  record_client_address?: boolean;
}

export interface GoogleAlloydbInstanceArgsReadPoolConfig {
  node_count?: number;
}

export interface GoogleAlloydbInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAlloydbInstanceArgs {
  annotations?: { [key: string]: string };
  cluster: string;
  display_name?: string;
  gce_zone?: string;
  instance_id: string;
  instance_type: string;
  labels?: { [key: string]: string };
  client_connection_config?: GoogleAlloydbInstanceArgsClientConnectionConfig;
  machine_config?: GoogleAlloydbInstanceArgsMachineConfig;
  network_config?: GoogleAlloydbInstanceArgsNetworkConfig;
  psc_instance_config?: GoogleAlloydbInstanceArgsPscInstanceConfig;
  query_insights_config?: GoogleAlloydbInstanceArgsQueryInsightsConfig;
  read_pool_config?: GoogleAlloydbInstanceArgsReadPoolConfig;
  timeouts?: GoogleAlloydbInstanceArgsTimeouts;
}

export class google_alloydb_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAlloydbInstanceArgs) {
    const meta = {client_connection_config:{isBlock:true,ssl_config:{isBlock:true}},machine_config:{isBlock:true},network_config:{isBlock:true,authorized_external_networks:{isBlock:true}},psc_instance_config:{isBlock:true},query_insights_config:{isBlock:true},read_pool_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_alloydb_instance", resourceName);
  }

  get availability_type(): string {
    return `${this.resourceType}.${this.resourceName}.availability_type`;
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get database_flags(): string {
    return `${this.resourceType}.${this.resourceName}.database_flags`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get instance_type(): string {
    return `${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get outbound_public_ip_addresses(): string {
    return `${this.resourceType}.${this.resourceName}.outbound_public_ip_addresses`;
  }

  get public_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.public_ip_address`;
  }

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
