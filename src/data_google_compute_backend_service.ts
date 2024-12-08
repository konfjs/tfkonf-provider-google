import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeBackendServiceArgs {
  name: string;
  project?: string;
}

export class data_google_compute_backend_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeBackendServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_backend_service", resourceName);
  }

  get affinity_cookie_ttl_sec(): string {
    return `data.${this.resourceType}.${this.resourceName}.affinity_cookie_ttl_sec`;
  }

  get backend(): string {
    return `data.${this.resourceType}.${this.resourceName}.backend`;
  }

  get cdn_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.cdn_policy`;
  }

  get circuit_breakers(): string {
    return `data.${this.resourceType}.${this.resourceName}.circuit_breakers`;
  }

  get compression_mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.compression_mode`;
  }

  get connection_draining_timeout_sec(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_draining_timeout_sec`;
  }

  get consistent_hash(): string {
    return `data.${this.resourceType}.${this.resourceName}.consistent_hash`;
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get custom_request_headers(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_request_headers`;
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

  get fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get generated_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.generated_id`;
  }

  get health_checks(): string {
    return `data.${this.resourceType}.${this.resourceName}.health_checks`;
  }

  get iap(): string {
    return `data.${this.resourceType}.${this.resourceName}.iap`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ip_address_selection_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_address_selection_policy`;
  }

  get load_balancing_scheme(): string {
    return `data.${this.resourceType}.${this.resourceName}.load_balancing_scheme`;
  }

  get locality_lb_policies(): string {
    return `data.${this.resourceType}.${this.resourceName}.locality_lb_policies`;
  }

  get locality_lb_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.locality_lb_policy`;
  }

  get log_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.log_config`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get outlier_detection(): string {
    return `data.${this.resourceType}.${this.resourceName}.outlier_detection`;
  }

  get port_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.port_name`;
  }

  get protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.protocol`;
  }

  get security_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_policy`;
  }

  get security_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_settings`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get service_lb_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_lb_policy`;
  }

  get session_affinity(): string {
    return `data.${this.resourceType}.${this.resourceName}.session_affinity`;
  }

  get strong_session_affinity_cookie(): string {
    return `data.${this.resourceType}.${this.resourceName}.strong_session_affinity_cookie`;
  }

  get timeout_sec(): string {
    return `data.${this.resourceType}.${this.resourceName}.timeout_sec`;
  }
}
