import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputePublicDelegatedPrefixArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputePublicDelegatedPrefixArgs {
  description?: string;
  ip_cidr_range: string;
  is_live_migration?: boolean;
  name: string;
  parent_prefix: string;
  region: string;
  timeouts?: GoogleComputePublicDelegatedPrefixArgsTimeouts;
}

export class google_compute_public_delegated_prefix extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputePublicDelegatedPrefixArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_public_delegated_prefix", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_cidr_range(): string {
    return `${this.resourceType}.${this.resourceName}.ip_cidr_range`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.parent_prefix`;
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
}
