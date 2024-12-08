import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeHealthCheckArgsGrpcHealthCheck {
  grpc_service_name?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
}

export interface GoogleComputeHealthCheckArgsHttp2HealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}

export interface GoogleComputeHealthCheckArgsHttpHealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}

export interface GoogleComputeHealthCheckArgsHttpsHealthCheck {
  host?: string;
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request_path?: string;
  response?: string;
}

export interface GoogleComputeHealthCheckArgsLogConfig {
  enable?: boolean;
}

export interface GoogleComputeHealthCheckArgsSslHealthCheck {
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request?: string;
  response?: string;
}

export interface GoogleComputeHealthCheckArgsTcpHealthCheck {
  port?: number;
  port_name?: string;
  port_specification?: string;
  proxy_header?: string;
  request?: string;
  response?: string;
}

export interface GoogleComputeHealthCheckArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeHealthCheckArgs {
  check_interval_sec?: number;
  description?: string;
  healthy_threshold?: number;
  name: string;
  source_regions?: string[];
  timeout_sec?: number;
  unhealthy_threshold?: number;
  grpc_health_check?: GoogleComputeHealthCheckArgsGrpcHealthCheck;
  http2_health_check?: GoogleComputeHealthCheckArgsHttp2HealthCheck;
  http_health_check?: GoogleComputeHealthCheckArgsHttpHealthCheck;
  https_health_check?: GoogleComputeHealthCheckArgsHttpsHealthCheck;
  log_config?: GoogleComputeHealthCheckArgsLogConfig;
  ssl_health_check?: GoogleComputeHealthCheckArgsSslHealthCheck;
  tcp_health_check?: GoogleComputeHealthCheckArgsTcpHealthCheck;
  timeouts?: GoogleComputeHealthCheckArgsTimeouts;
}

export class google_compute_health_check extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeHealthCheckArgs) {
    const meta = {grpc_health_check:{isBlock:true},http2_health_check:{isBlock:true},http_health_check:{isBlock:true},https_health_check:{isBlock:true},log_config:{isBlock:true},ssl_health_check:{isBlock:true},tcp_health_check:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_health_check", resourceName);
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

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
