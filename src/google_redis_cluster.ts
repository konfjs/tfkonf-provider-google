import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleRedisClusterArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}

export interface GoogleRedisClusterArgsMaintenancePolicyWeeklyMaintenanceWindow {
  day: string;
  start_time: GoogleRedisClusterArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}

export interface GoogleRedisClusterArgsMaintenancePolicy {
  weekly_maintenance_window?: GoogleRedisClusterArgsMaintenancePolicyWeeklyMaintenanceWindow[];
}

export interface GoogleRedisClusterArgsPersistenceConfigAofConfig {
}

export interface GoogleRedisClusterArgsPersistenceConfigRdbConfig {
}

export interface GoogleRedisClusterArgsPersistenceConfig {
  aof_config?: GoogleRedisClusterArgsPersistenceConfigAofConfig;
  rdb_config?: GoogleRedisClusterArgsPersistenceConfigRdbConfig;
}

export interface GoogleRedisClusterArgsPscConfigs {
  network: string;
}

export interface GoogleRedisClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleRedisClusterArgsZoneDistributionConfig {
  zone?: string;
}

export interface GoogleRedisClusterArgs {
  authorization_mode?: string;
  deletion_protection_enabled?: boolean;
  redis_configs?: { [key: string]: string };
  replica_count?: number;
  shard_count: number;
  transit_encryption_mode?: string;
  maintenance_policy?: GoogleRedisClusterArgsMaintenancePolicy;
  persistence_config?: GoogleRedisClusterArgsPersistenceConfig;
  psc_configs: GoogleRedisClusterArgsPscConfigs[];
  timeouts?: GoogleRedisClusterArgsTimeouts;
  zone_distribution_config?: GoogleRedisClusterArgsZoneDistributionConfig;
}

export class google_redis_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleRedisClusterArgs) {
    const meta = {maintenance_policy:{isBlock:true,weekly_maintenance_window:{isBlock:true,start_time:{isBlock:true}}},persistence_config:{isBlock:true,aof_config:{isBlock:true},rdb_config:{isBlock:true}},psc_configs:{isBlock:true},timeouts:{isBlock:true},zone_distribution_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_redis_cluster", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get discovery_endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.discovery_endpoints`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get maintenance_schedule(): string {
    return `${this.resourceType}.${this.resourceName}.maintenance_schedule`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get node_type(): string {
    return `${this.resourceType}.${this.resourceName}.node_type`;
  }

  get precise_size_gb(): string {
    return `${this.resourceType}.${this.resourceName}.precise_size_gb`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get psc_connections(): string {
    return `${this.resourceType}.${this.resourceName}.psc_connections`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get shard_count(): string {
    return `${this.resourceType}.${this.resourceName}.shard_count`;
  }

  get size_gb(): string {
    return `${this.resourceType}.${this.resourceName}.size_gb`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_info(): string {
    return `${this.resourceType}.${this.resourceName}.state_info`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }
}
