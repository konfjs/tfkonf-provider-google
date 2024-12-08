import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMemorystoreInstanceArgsDesiredPscAutoConnections {
  network: string;
  project_id: string;
}

export interface GoogleMemorystoreInstanceArgsPersistenceConfigAofConfig {
}

export interface GoogleMemorystoreInstanceArgsPersistenceConfigRdbConfig {
}

export interface GoogleMemorystoreInstanceArgsPersistenceConfig {
  aof_config?: GoogleMemorystoreInstanceArgsPersistenceConfigAofConfig;
  rdb_config?: GoogleMemorystoreInstanceArgsPersistenceConfigRdbConfig;
}

export interface GoogleMemorystoreInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMemorystoreInstanceArgsZoneDistributionConfig {
  zone?: string;
}

export interface GoogleMemorystoreInstanceArgs {
  deletion_protection_enabled?: boolean;
  engine_configs?: { [key: string]: string };
  instance_id: string;
  labels?: { [key: string]: string };
  location: string;
  shard_count: number;
  desired_psc_auto_connections: GoogleMemorystoreInstanceArgsDesiredPscAutoConnections[];
  persistence_config?: GoogleMemorystoreInstanceArgsPersistenceConfig;
  timeouts?: GoogleMemorystoreInstanceArgsTimeouts;
  zone_distribution_config?: GoogleMemorystoreInstanceArgsZoneDistributionConfig;
}

export class google_memorystore_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleMemorystoreInstanceArgs) {
    const meta = {desired_psc_auto_connections:{isBlock:true},persistence_config:{isBlock:true,aof_config:{isBlock:true},rdb_config:{isBlock:true}},timeouts:{isBlock:true},zone_distribution_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_memorystore_instance", resourceName);
  }

  get authorization_mode(): string {
    return `${this.resourceType}.${this.resourceName}.authorization_mode`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get discovery_endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.discovery_endpoints`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.endpoints`;
  }

  get engine_version(): string {
    return `${this.resourceType}.${this.resourceName}.engine_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get mode(): string {
    return `${this.resourceType}.${this.resourceName}.mode`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get node_config(): string {
    return `${this.resourceType}.${this.resourceName}.node_config`;
  }

  get node_type(): string {
    return `${this.resourceType}.${this.resourceName}.node_type`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get psc_auto_connections(): string {
    return `${this.resourceType}.${this.resourceName}.psc_auto_connections`;
  }

  get replica_count(): string {
    return `${this.resourceType}.${this.resourceName}.replica_count`;
  }

  get shard_count(): string {
    return `${this.resourceType}.${this.resourceName}.shard_count`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_info(): string {
    return `${this.resourceType}.${this.resourceName}.state_info`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get transit_encryption_mode(): string {
    return `${this.resourceType}.${this.resourceName}.transit_encryption_mode`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
