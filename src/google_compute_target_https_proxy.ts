import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeTargetHttpsProxyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeTargetHttpsProxyArgs {
  certificate_manager_certificates?: string[];
  certificate_map?: string;
  description?: string;
  http_keep_alive_timeout_sec?: number;
  name: string;
  quic_override?: string;
  server_tls_policy?: string;
  ssl_certificates?: string[];
  ssl_policy?: string;
  url_map: string;
  timeouts?: GoogleComputeTargetHttpsProxyArgsTimeouts;
}

export class google_compute_target_https_proxy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeTargetHttpsProxyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_target_https_proxy", resourceName);
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

  get proxy_bind(): string {
    return `${this.resourceType}.${this.resourceName}.proxy_bind`;
  }

  get proxy_id(): string {
    return `${this.resourceType}.${this.resourceName}.proxy_id`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get tls_early_data(): string {
    return `${this.resourceType}.${this.resourceName}.tls_early_data`;
  }

  get url_map(): string {
    return `${this.resourceType}.${this.resourceName}.url_map`;
  }
}
