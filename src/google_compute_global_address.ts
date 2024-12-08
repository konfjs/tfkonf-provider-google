import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeGlobalAddressArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeGlobalAddressArgs {
  address_type?: string;
  description?: string;
  ip_version?: string;
  labels?: { [key: string]: string };
  name: string;
  network?: string;
  purpose?: string;
  timeouts?: GoogleComputeGlobalAddressArgsTimeouts;
}

export class google_compute_global_address extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeGlobalAddressArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_global_address", resourceName);
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

  get prefix_length(): string {
    return `${this.resourceType}.${this.resourceName}.prefix_length`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
