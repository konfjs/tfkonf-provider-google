import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionHealthCheckArgsGrpcHealthCheck {
  grpc_service_name?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
}

export interface GoogleComputeRegionHealthCheckArgsHttp2HealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}

export interface GoogleComputeRegionHealthCheckArgsHttpHealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}

export interface GoogleComputeRegionHealthCheckArgsHttpsHealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}

export interface GoogleComputeRegionHealthCheckArgsLogConfig {
  enable?: boolean;
}

export interface GoogleComputeRegionHealthCheckArgsSslHealthCheck {
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request?: string;
  response?: string;
}

export interface GoogleComputeRegionHealthCheckArgsTcpHealthCheck {
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request?: string;
  response?: string;
}

export interface GoogleComputeRegionHealthCheckArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionHealthCheckArgs {
  check_interval_sec?: number;
  description?: string;
  healthy_threshold?: number;
  name: string;
  timeout_sec?: number;
  unhealthy_threshold?: number;
  grpc_health_check?: GoogleComputeRegionHealthCheckArgsGrpcHealthCheck;
  http2_health_check?: GoogleComputeRegionHealthCheckArgsHttp2HealthCheck;
  http_health_check?: GoogleComputeRegionHealthCheckArgsHttpHealthCheck;
  https_health_check?: GoogleComputeRegionHealthCheckArgsHttpsHealthCheck;
  log_config?: GoogleComputeRegionHealthCheckArgsLogConfig;
  ssl_health_check?: GoogleComputeRegionHealthCheckArgsSslHealthCheck;
  tcp_health_check?: GoogleComputeRegionHealthCheckArgsTcpHealthCheck;
  timeouts?: GoogleComputeRegionHealthCheckArgsTimeouts;
}

export class google_compute_region_health_check extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionHealthCheckArgs) {
    const meta = {grpc_health_check:{isBlock:true},http2_health_check:{isBlock:true},http_health_check:{isBlock:true},https_health_check:{isBlock:true},log_config:{isBlock:true},ssl_health_check:{isBlock:true},tcp_health_check:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_health_check", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
