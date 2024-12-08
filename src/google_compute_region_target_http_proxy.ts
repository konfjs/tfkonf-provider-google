import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionTargetHttpProxyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionTargetHttpProxyArgs {
  description?: string;
  http_keep_alive_timeout_sec?: number;
  name: string;
  url_map: string;
  timeouts?: GoogleComputeRegionTargetHttpProxyArgsTimeouts;
}

export class google_compute_region_target_http_proxy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeRegionTargetHttpProxyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_target_http_proxy", resourceName);
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
