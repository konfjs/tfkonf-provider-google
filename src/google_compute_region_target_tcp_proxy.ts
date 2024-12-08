import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionTargetTcpProxyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeRegionTargetTcpProxyArgs {
  backend_service: string;
  description?: string;
  name: string;
  proxy_header?: string;
  timeouts?: GoogleComputeRegionTargetTcpProxyArgsTimeouts;
}

export class google_compute_region_target_tcp_proxy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionTargetTcpProxyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_target_tcp_proxy", resourceName);
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

  get proxy_bind(): string {
    return `${this.resourceType}.${this.resourceName}.proxy_bind`;
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
}
