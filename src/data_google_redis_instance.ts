import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleRedisInstanceArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_redis_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleRedisInstanceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_redis_instance", resourceName);
  }

  get alternative_location_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.alternative_location_id`;
  }

  get auth_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.auth_enabled`;
  }

  get auth_string(): string {
    return `data.${this.resourceType}.${this.resourceName}.auth_string`;
  }

  get authorized_network(): string {
    return `data.${this.resourceType}.${this.resourceName}.authorized_network`;
  }

  get connect_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.connect_mode`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get current_location_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.current_location_id`;
  }

  get customer_managed_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_managed_key`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get host(): string {
    return `data.${this.resourceType}.${this.resourceName}.host`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get location_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.location_id`;
  }

  get maintenance_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_policy`;
  }

  get maintenance_schedule(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_schedule`;
  }

  get maintenance_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_version`;
  }

  get memory_size_gb(): string {
    return `data.${this.resourceType}.${this.resourceName}.memory_size_gb`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get nodes(): string {
    return `data.${this.resourceType}.${this.resourceName}.nodes`;
  }

  get persistence_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.persistence_config`;
  }

  get persistence_iam_identity(): string {
    return `data.${this.resourceType}.${this.resourceName}.persistence_iam_identity`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get read_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.read_endpoint`;
  }

  get read_endpoint_port(): string {
    return `data.${this.resourceType}.${this.resourceName}.read_endpoint_port`;
  }

  get read_replicas_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.read_replicas_mode`;
  }

  get redis_configs(): string {
    return `data.${this.resourceType}.${this.resourceName}.redis_configs`;
  }

  get redis_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.redis_version`;
  }

  get replica_count(): string {
    return `data.${this.resourceType}.${this.resourceName}.replica_count`;
  }

  get reserved_ip_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.reserved_ip_range`;
  }

  get secondary_ip_range(): string {
    return `data.${this.resourceType}.${this.resourceName}.secondary_ip_range`;
  }

  get server_ca_certs(): string {
    return `data.${this.resourceType}.${this.resourceName}.server_ca_certs`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get tier(): string {
    return `data.${this.resourceType}.${this.resourceName}.tier`;
  }

  get transit_encryption_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.transit_encryption_mode`;
  }
}
