import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeHealthCheckArgs {
  name: string;
  project?: string;
}

export class data_google_compute_health_check extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeHealthCheckArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_health_check", resourceName);
  }

  get check_interval_sec(): string {
    return `data.${this.resourceType}.${this.resourceName}.check_interval_sec`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get grpc_health_check(): string {
    return `data.${this.resourceType}.${this.resourceName}.grpc_health_check`;
  }

  get healthy_threshold(): string {
    return `data.${this.resourceType}.${this.resourceName}.healthy_threshold`;
  }

  get http2_health_check(): string {
    return `data.${this.resourceType}.${this.resourceName}.http2_health_check`;
  }

  get http_health_check(): string {
    return `data.${this.resourceType}.${this.resourceName}.http_health_check`;
  }

  get https_health_check(): string {
    return `data.${this.resourceType}.${this.resourceName}.https_health_check`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get log_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.log_config`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get source_regions(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_regions`;
  }

  get ssl_health_check(): string {
    return `data.${this.resourceType}.${this.resourceName}.ssl_health_check`;
  }

  get tcp_health_check(): string {
    return `data.${this.resourceType}.${this.resourceName}.tcp_health_check`;
  }

  get timeout_sec(): string {
    return `data.${this.resourceType}.${this.resourceName}.timeout_sec`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get unhealthy_threshold(): string {
    return `data.${this.resourceType}.${this.resourceName}.unhealthy_threshold`;
  }
}
