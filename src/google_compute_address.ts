import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeAddressArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeAddressArgs {
  address_type?: string;
  description?: string;
  ip_version?: string;
  ipv6_endpoint_type?: string;
  labels?: { [key: string]: string };
  name: string;
  network?: string;
  timeouts?: GoogleComputeAddressArgsTimeouts;
}

export class google_compute_address extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeAddressArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_address", resourceName);
  }

  get address(): string {
    return `${this.resourceType}.${this.resourceName}.address`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get label_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.label_fingerprint`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network_tier(): string {
    return `${this.resourceType}.${this.resourceName}.network_tier`;
  }

  get prefix_length(): string {
    return `${this.resourceType}.${this.resourceName}.prefix_length`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get purpose(): string {
    return `${this.resourceType}.${this.resourceName}.purpose`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get subnetwork(): string {
    return `${this.resourceType}.${this.resourceName}.subnetwork`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get users(): string {
    return `${this.resourceType}.${this.resourceName}.users`;
  }
}
