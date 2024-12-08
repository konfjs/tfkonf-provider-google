import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeHttpsHealthCheckArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeHttpsHealthCheckArgs {
  check_interval_sec?: number;
  description?: string;
  healthy_threshold?: number;
  host?: string;
  name: string;
  port?: number;
  request_path?: string;
  timeout_sec?: number;
  unhealthy_threshold?: number;
  timeouts?: GoogleComputeHttpsHealthCheckArgsTimeouts;
}

export class google_compute_https_health_check extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeHttpsHealthCheckArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_https_health_check", resourceName);
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
}
