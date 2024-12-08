import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionTargetHttpsProxyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionTargetHttpsProxyArgs {
  certificate_manager_certificates?: string[];
  description?: string;
  http_keep_alive_timeout_sec?: number;
  name: string;
  server_tls_policy?: string;
  ssl_certificates?: string[];
  ssl_policy?: string;
  url_map: string;
  timeouts?: GoogleComputeRegionTargetHttpsProxyArgsTimeouts;
}

export class google_compute_region_target_https_proxy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionTargetHttpsProxyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_target_https_proxy", resourceName);
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

  get proxy_id(): string {
    return `${this.resourceType}.${this.resourceName}.proxy_id`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get url_map(): string {
    return `${this.resourceType}.${this.resourceName}.url_map`;
  }
}
