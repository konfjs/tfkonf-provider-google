import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeBackendBucketArgsCdnPolicyBypassCacheOnRequestHeaders {
  header_name?: string;
}

export interface GoogleComputeBackendBucketArgsCdnPolicyCacheKeyPolicy {
  include_http_headers?: string[];
  query_string_whitelist?: string[];
}

export interface GoogleComputeBackendBucketArgsCdnPolicyNegativeCachingPolicy {
  code?: number;
  ttl?: number;
}

export interface GoogleComputeBackendBucketArgsCdnPolicy {
  request_coalescing?: boolean;
  signed_url_cache_max_age_sec?: number;
  bypass_cache_on_request_headers?: GoogleComputeBackendBucketArgsCdnPolicyBypassCacheOnRequestHeaders[];
  cache_key_policy?: GoogleComputeBackendBucketArgsCdnPolicyCacheKeyPolicy;
  negative_caching_policy?: GoogleComputeBackendBucketArgsCdnPolicyNegativeCachingPolicy[];
}

export interface GoogleComputeBackendBucketArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeBackendBucketArgs {
  bucket_name: string;
  compression_mode?: string;
  custom_response_headers?: string[];
  description?: string;
  edge_security_policy?: string;
  enable_cdn?: boolean;
  name: string;
  cdn_policy?: GoogleComputeBackendBucketArgsCdnPolicy;
  timeouts?: GoogleComputeBackendBucketArgsTimeouts;
}

export class google_compute_backend_bucket extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeBackendBucketArgs) {
    const meta = {cdn_policy:{isBlock:true,bypass_cache_on_request_headers:{isBlock:true},cache_key_policy:{isBlock:true},negative_caching_policy:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_backend_bucket", resourceName);
  }

  get bucket_name(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_name`;
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

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
