import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMemcacheInstanceArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}

export interface GoogleMemcacheInstanceArgsMaintenancePolicyWeeklyMaintenanceWindow {
  day: string;
  duration: string;
  start_time: GoogleMemcacheInstanceArgsMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}

export interface GoogleMemcacheInstanceArgsMaintenancePolicy {
  description?: string;
  weekly_maintenance_window: GoogleMemcacheInstanceArgsMaintenancePolicyWeeklyMaintenanceWindow[];
}

export interface GoogleMemcacheInstanceArgsMemcacheParameters {
  params?: { [key: string]: string };
}

export interface GoogleMemcacheInstanceArgsNodeConfig {
  cpu_count: number;
  memory_size_mb: number;
}

export interface GoogleMemcacheInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMemcacheInstanceArgs {
  labels?: { [key: string]: string };
  memcache_version?: string;
  name: string;
  node_count: number;
  reserved_ip_range_id?: string[];
  maintenance_policy?: GoogleMemcacheInstanceArgsMaintenancePolicy;
  memcache_parameters?: GoogleMemcacheInstanceArgsMemcacheParameters;
  node_config: GoogleMemcacheInstanceArgsNodeConfig;
  timeouts?: GoogleMemcacheInstanceArgsTimeouts;
}

export class google_memcache_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleMemcacheInstanceArgs) {
    const meta = {maintenance_policy:{isBlock:true,weekly_maintenance_window:{isBlock:true,start_time:{isBlock:true}}},memcache_parameters:{isBlock:true},node_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_memcache_instance", resourceName);
  }

  get authorized_network(): string {
    return `${this.resourceType}.${this.resourceName}.authorized_network`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get discovery_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.discovery_endpoint`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get maintenance_schedule(): string {
    return `${this.resourceType}.${this.resourceName}.maintenance_schedule`;
  }

  get memcache_full_version(): string {
    return `${this.resourceType}.${this.resourceName}.memcache_full_version`;
  }

  get memcache_nodes(): string {
    return `${this.resourceType}.${this.resourceName}.memcache_nodes`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get node_count(): string {
    return `${this.resourceType}.${this.resourceName}.node_count`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get zones(): string {
    return `${this.resourceType}.${this.resourceName}.zones`;
  }
}
