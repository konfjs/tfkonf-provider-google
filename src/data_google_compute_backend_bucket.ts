import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeBackendBucketArgs {
  name: string;
  project?: string;
}

export class data_google_compute_backend_bucket extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeBackendBucketArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_backend_bucket", resourceName);
  }

  get bucket_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket_name`;
  }

  get cdn_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.cdn_policy`;
  }

  get compression_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.compression_mode`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get custom_response_headers(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_response_headers`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get edge_security_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.edge_security_policy`;
  }

  get enable_cdn(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_cdn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }
}
