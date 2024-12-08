import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionSslPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionSslPolicyArgs {
  custom_features?: string[];
  description?: string;
  min_tls_version?: string;
  name: string;
  profile?: string;
  timeouts?: GoogleComputeRegionSslPolicyArgsTimeouts;
}

export class google_compute_region_ssl_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionSslPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_ssl_policy", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get enabled_features(): string {
    return `${this.resourceType}.${this.resourceName}.enabled_features`;
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

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
