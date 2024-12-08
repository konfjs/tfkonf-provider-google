import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeTargetGrpcProxyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeTargetGrpcProxyArgs {
  description?: string;
  name: string;
  url_map?: string;
  validate_for_proxyless?: boolean;
  timeouts?: GoogleComputeTargetGrpcProxyArgsTimeouts;
}

export class google_compute_target_grpc_proxy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeTargetGrpcProxyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_target_grpc_proxy", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
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

  get self_link_with_id(): string {
    return `${this.resourceType}.${this.resourceName}.self_link_with_id`;
  }
}
