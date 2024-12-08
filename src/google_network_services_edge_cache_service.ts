import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkServicesEdgeCacheServiceArgsLogConfig {
  sample_rate?: number;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingHostRule {
  description?: string;
  hosts: string[];
  path_matcher: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd {
  header_name: string;
  header_value: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove {
  header_name: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd {
  header_name: string;
  header_value: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove {
  header_name: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleHeaderAction {
  request_header_to_add?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd[];
  request_header_to_remove?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove[];
  response_header_to_add?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd[];
  response_header_to_remove?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove[];
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleMatchRuleHeaderMatch {
  exact_match?: string;
  header_name: string;
  prefix_match?: string;
  present_match?: boolean;
  suffix_match?: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch {
  exact_match?: string;
  name: string;
  present_match?: boolean;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleMatchRule {
  full_path_match?: string;
  path_template_match?: string;
  prefix_match?: string;
  header_match?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleMatchRuleHeaderMatch[];
  query_parameter_match?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch[];
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures {
  actions: string[];
  copied_parameters?: string[];
  keyset?: string;
  token_query_parameter?: string;
  token_ttl?: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy {
  exclude_query_string?: boolean;
  excluded_query_parameters?: string[];
  included_cookie_names?: string[];
  included_header_names?: string[];
  included_query_parameters?: string[];
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions {
  allowed_signature_algorithms?: string[];
  token_query_parameter?: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionCdnPolicy {
  client_ttl?: string;
  negative_caching?: boolean;
  negative_caching_policy?: { [key: string]: string };
  signed_request_maximum_expiration_ttl?: string;
  add_signatures?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures;
  cache_key_policy?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy;
  signed_token_options?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionCorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origins?: string[];
  disabled?: boolean;
  expose_headers?: string[];
  max_age: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionUrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
  path_template_rewrite?: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteAction {
  cdn_policy?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionCdnPolicy;
  cors_policy?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionCorsPolicy;
  url_rewrite?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteActionUrlRewrite;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleUrlRedirect {
  host_redirect?: string;
  path_redirect?: string;
  prefix_redirect?: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRule {
  description?: string;
  origin?: string;
  priority: string;
  header_action?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleHeaderAction;
  match_rule: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleMatchRule[];
  route_action?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleRouteAction;
  url_redirect?: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRuleUrlRedirect;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcher {
  description?: string;
  name: string;
  route_rule: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcherRouteRule[];
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsRouting {
  host_rule: GoogleNetworkServicesEdgeCacheServiceArgsRoutingHostRule[];
  path_matcher: GoogleNetworkServicesEdgeCacheServiceArgsRoutingPathMatcher[];
}

export interface GoogleNetworkServicesEdgeCacheServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkServicesEdgeCacheServiceArgs {
  description?: string;
  disable_http2?: boolean;
  edge_security_policy?: string;
  edge_ssl_certificates?: string[];
  labels?: { [key: string]: string };
  name: string;
  ssl_policy?: string;
  log_config?: GoogleNetworkServicesEdgeCacheServiceArgsLogConfig;
  routing: GoogleNetworkServicesEdgeCacheServiceArgsRouting;
  timeouts?: GoogleNetworkServicesEdgeCacheServiceArgsTimeouts;
}

export class google_network_services_edge_cache_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetworkServicesEdgeCacheServiceArgs) {
    const meta = {log_config:{isBlock:true},routing:{isBlock:true,host_rule:{isBlock:true},path_matcher:{isBlock:true,route_rule:{isBlock:true,header_action:{isBlock:true,request_header_to_add:{isBlock:true},request_header_to_remove:{isBlock:true},response_header_to_add:{isBlock:true},response_header_to_remove:{isBlock:true}},match_rule:{isBlock:true,header_match:{isBlock:true},query_parameter_match:{isBlock:true}},route_action:{isBlock:true,cdn_policy:{isBlock:true,add_signatures:{isBlock:true},cache_key_policy:{isBlock:true},signed_token_options:{isBlock:true}},cors_policy:{isBlock:true},url_rewrite:{isBlock:true}},url_redirect:{isBlock:true}}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_services_edge_cache_service", resourceName);
  }

  get disable_quic(): string {
    return `${this.resourceType}.${this.resourceName}.disable_quic`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ipv4_addresses(): string {
    return `${this.resourceType}.${this.resourceName}.ipv4_addresses`;
  }

  get ipv6_addresses(): string {
    return `${this.resourceType}.${this.resourceName}.ipv6_addresses`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get require_tls(): string {
    return `${this.resourceType}.${this.resourceName}.require_tls`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
