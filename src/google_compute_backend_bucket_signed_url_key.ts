import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeBackendBucketSignedUrlKeyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeBackendBucketSignedUrlKeyArgs {
  backend_bucket: string;
  key_value: string;
  name: string;
  timeouts?: GoogleComputeBackendBucketSignedUrlKeyArgsTimeouts;
}

export class google_compute_backend_bucket_signed_url_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeBackendBucketSignedUrlKeyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_backend_bucket_signed_url_key", resourceName);
  }

  get backend_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.backend_bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_value(): string {
    return `${this.resourceType}.${this.resourceName}.key_value`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
