import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleRedisInstanceArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}

export interface GoogleRedisInstanceArgsMaintenancePolicyWeeklyMaintenanceWindow {
  day: string;
  start_time: GoogleRedisInstanceArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}

export interface GoogleRedisInstanceArgsMaintenancePolicy {
  description?: string;
  weekly_maintenance_window?: GoogleRedisInstanceArgsMaintenancePolicyWeeklyMaintenanceWindow[];
}

export interface GoogleRedisInstanceArgsPersistenceConfig {
  rdb_snapshot_period?: string;
}

export interface GoogleRedisInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleRedisInstanceArgs {
  auth_enabled?: boolean;
  connect_mode?: string;
  customer_managed_key?: string;
  display_name?: string;
  labels?: { [key: string]: string };
  memory_size_gb: number;
  name: string;
  redis_configs?: { [key: string]: string };
  tier?: string;
  transit_encryption_mode?: string;
  maintenance_policy?: GoogleRedisInstanceArgsMaintenancePolicy;
  persistence_config?: GoogleRedisInstanceArgsPersistenceConfig;
  timeouts?: GoogleRedisInstanceArgsTimeouts;
}

export class google_redis_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleRedisInstanceArgs) {
    const meta = {maintenance_policy:{isBlock:true,weekly_maintenance_window:{isBlock:true,start_time:{isBlock:true}}},persistence_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_redis_instance", resourceName);
  }

  get alternative_location_id(): string {
    return `${this.resourceType}.${this.resourceName}.alternative_location_id`;
  }

  get auth_string(): string {
    return `${this.resourceType}.${this.resourceName}.auth_string`;
  }

  get authorized_network(): string {
    return `${this.resourceType}.${this.resourceName}.authorized_network`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get current_location_id(): string {
    return `${this.resourceType}.${this.resourceName}.current_location_id`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get host(): string {
    return `${this.resourceType}.${this.resourceName}.host`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location_id(): string {
    return `${this.resourceType}.${this.resourceName}.location_id`;
  }

  get maintenance_schedule(): string {
    return `${this.resourceType}.${this.resourceName}.maintenance_schedule`;
  }

  get maintenance_version(): string {
    return `${this.resourceType}.${this.resourceName}.maintenance_version`;
  }

  get memory_size_gb(): string {
    return `${this.resourceType}.${this.resourceName}.memory_size_gb`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get nodes(): string {
    return `${this.resourceType}.${this.resourceName}.nodes`;
  }

  get persistence_iam_identity(): string {
    return `${this.resourceType}.${this.resourceName}.persistence_iam_identity`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get read_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.read_endpoint`;
  }

  get read_endpoint_port(): string {
    return `${this.resourceType}.${this.resourceName}.read_endpoint_port`;
  }

  get read_replicas_mode(): string {
    return `${this.resourceType}.${this.resourceName}.read_replicas_mode`;
  }

  get redis_version(): string {
    return `${this.resourceType}.${this.resourceName}.redis_version`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get replica_count(): string {
    return `${this.resourceType}.${this.resourceName}.replica_count`;
  }

  get reserved_ip_range(): string {
    return `${this.resourceType}.${this.resourceName}.reserved_ip_range`;
  }

  get secondary_ip_range(): string {
    return `${this.resourceType}.${this.resourceName}.secondary_ip_range`;
  }

  get server_ca_certs(): string {
    return `${this.resourceType}.${this.resourceName}.server_ca_certs`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
