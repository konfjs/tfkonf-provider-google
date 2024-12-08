import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeTargetHttpProxyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeTargetHttpProxyArgs {
  description?: string;
  http_keep_alive_timeout_sec?: number;
  name: string;
  url_map: string;
  timeouts?: GoogleComputeTargetHttpProxyArgsTimeouts;
}

export class google_compute_target_http_proxy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeTargetHttpProxyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_target_http_proxy", resourceName);
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

  get url_map(): string {
    return `${this.resourceType}.${this.resourceName}.url_map`;
  }
}
