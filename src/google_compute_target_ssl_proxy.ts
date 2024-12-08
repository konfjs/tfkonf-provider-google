import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeTargetSslProxyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeTargetSslProxyArgs {
  backend_service: string;
  certificate_map?: string;
  description?: string;
  name: string;
  proxy_header?: string;
  ssl_certificates?: string[];
  ssl_policy?: string;
  timeouts?: GoogleComputeTargetSslProxyArgsTimeouts;
}

export class google_compute_target_ssl_proxy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeTargetSslProxyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_target_ssl_proxy", resourceName);
  }

  get backend_service(): string {
    return `${this.resourceType}.${this.resourceName}.backend_service`;
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

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
