import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputePublicAdvertisedPrefixArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputePublicAdvertisedPrefixArgs {
  description?: string;
  dns_verification_ip: string;
  ip_cidr_range: string;
  name: string;
  timeouts?: GoogleComputePublicAdvertisedPrefixArgsTimeouts;
}

export class google_compute_public_advertised_prefix extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputePublicAdvertisedPrefixArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_public_advertised_prefix", resourceName);
  }

  get dns_verification_ip(): string {
    return `${this.resourceType}.${this.resourceName}.dns_verification_ip`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get shared_secret(): string {
    return `${this.resourceType}.${this.resourceName}.shared_secret`;
  }
}
