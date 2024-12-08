import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionBackendServiceArgsBackend {
  balancing_mode?: string;
  capacity_scaler?: number;
  description?: string;
  group: string;
  max_connections?: number;
  max_connections_per_endpoint?: number;
  max_connections_per_instance?: number;
  max_rate?: number;
  max_rate_per_endpoint?: number;
  max_rate_per_instance?: number;
  max_utilization?: number;
}

export interface GoogleComputeRegionBackendServiceArgsCdnPolicyCacheKeyPolicy {
  include_host?: boolean;
  include_named_cookies?: string[];
  include_protocol?: boolean;
  include_query_string?: boolean;
  query_string_blacklist?: string[];
  query_string_whitelist?: string[];
}

export interface GoogleComputeRegionBackendServiceArgsCdnPolicyNegativeCachingPolicy {
  code?: number;
}

export interface GoogleComputeRegionBackendServiceArgsCdnPolicy {
  signed_url_cache_max_age_sec?: number;
  cache_key_policy?: GoogleComputeRegionBackendServiceArgsCdnPolicyCacheKeyPolicy;
  negative_caching_policy?: GoogleComputeRegionBackendServiceArgsCdnPolicyNegativeCachingPolicy[];
}

export interface GoogleComputeRegionBackendServiceArgsCircuitBreakers {
  max_connections?: number;
  max_pending_requests?: number;
  max_requests?: number;
  max_requests_per_connection?: number;
  max_retries?: number;
}

export interface GoogleComputeRegionBackendServiceArgsConsistentHashHttpCookieTtl {
  nanos?: number;
  seconds: number;
}

export interface GoogleComputeRegionBackendServiceArgsConsistentHashHttpCookie {
  name?: string;
  path?: string;
  ttl?: GoogleComputeRegionBackendServiceArgsConsistentHashHttpCookieTtl;
}

export interface GoogleComputeRegionBackendServiceArgsConsistentHash {
  http_header_name?: string;
  minimum_ring_size?: number;
  http_cookie?: GoogleComputeRegionBackendServiceArgsConsistentHashHttpCookie;
}

export interface GoogleComputeRegionBackendServiceArgsFailoverPolicy {
  failover_ratio?: number;
}

export interface GoogleComputeRegionBackendServiceArgsIap {
  enabled: boolean;
  oauth2_client_id?: string;
  oauth2_client_secret?: string;
}

export interface GoogleComputeRegionBackendServiceArgsLogConfig {
  enable?: boolean;
  sample_rate?: number;
}

export interface GoogleComputeRegionBackendServiceArgsOutlierDetectionBaseEjectionTime {
  nanos?: number;
  seconds: number;
}

export interface GoogleComputeRegionBackendServiceArgsOutlierDetectionInterval {
  nanos?: number;
  seconds: number;
}

export interface GoogleComputeRegionBackendServiceArgsOutlierDetection {
  consecutive_errors?: number;
  consecutive_gateway_failure?: number;
  enforcing_consecutive_errors?: number;
  enforcing_consecutive_gateway_failure?: number;
  enforcing_success_rate?: number;
  max_ejection_percent?: number;
  success_rate_minimum_hosts?: number;
  success_rate_request_volume?: number;
  success_rate_stdev_factor?: number;
  base_ejection_time?: GoogleComputeRegionBackendServiceArgsOutlierDetectionBaseEjectionTime;
  interval?: GoogleComputeRegionBackendServiceArgsOutlierDetectionInterval;
}

export interface GoogleComputeRegionBackendServiceArgsStrongSessionAffinityCookieTtl {
  nanos?: number;
  seconds: number;
}

export interface GoogleComputeRegionBackendServiceArgsStrongSessionAffinityCookie {
  name?: string;
  path?: string;
  ttl?: GoogleComputeRegionBackendServiceArgsStrongSessionAffinityCookieTtl;
}

export interface GoogleComputeRegionBackendServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionBackendServiceArgs {
  affinity_cookie_ttl_sec?: number;
  connection_draining_timeout_sec?: number;
  description?: string;
  enable_cdn?: boolean;
  health_checks?: string[];
  ip_address_selection_policy?: string;
  load_balancing_scheme?: string;
  locality_lb_policy?: string;
  name: string;
  network?: string;
  backend?: GoogleComputeRegionBackendServiceArgsBackend[];
  cdn_policy?: GoogleComputeRegionBackendServiceArgsCdnPolicy;
  circuit_breakers?: GoogleComputeRegionBackendServiceArgsCircuitBreakers;
  consistent_hash?: GoogleComputeRegionBackendServiceArgsConsistentHash;
  failover_policy?: GoogleComputeRegionBackendServiceArgsFailoverPolicy;
  iap?: GoogleComputeRegionBackendServiceArgsIap;
  log_config?: GoogleComputeRegionBackendServiceArgsLogConfig;
  outlier_detection?: GoogleComputeRegionBackendServiceArgsOutlierDetection;
  strong_session_affinity_cookie?: GoogleComputeRegionBackendServiceArgsStrongSessionAffinityCookie;
  timeouts?: GoogleComputeRegionBackendServiceArgsTimeouts;
}

export class google_compute_region_backend_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionBackendServiceArgs) {
    const meta = {backend:{isBlock:true},cdn_policy:{isBlock:true,cache_key_policy:{isBlock:true},negative_caching_policy:{isBlock:true}},circuit_breakers:{isBlock:true},consistent_hash:{isBlock:true,http_cookie:{isBlock:true,ttl:{isBlock:true}}},failover_policy:{isBlock:true},iap:{isBlock:true},log_config:{isBlock:true},outlier_detection:{isBlock:true,base_ejection_time:{isBlock:true},interval:{isBlock:true}},strong_session_affinity_cookie:{isBlock:true,ttl:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_backend_service", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get generated_id(): string {
    return `${this.resourceType}.${this.resourceName}.generated_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get port_name(): string {
    return `${this.resourceType}.${this.resourceName}.port_name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get session_affinity(): string {
    return `${this.resourceType}.${this.resourceName}.session_affinity`;
  }

  get timeout_sec(): string {
    return `${this.resourceType}.${this.resourceName}.timeout_sec`;
  }
}
