import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSecurityPolicyRuleArgsHeaderActionRequestHeadersToAdds {
  header_name?: string;
  header_value?: string;
}

export interface GoogleComputeSecurityPolicyRuleArgsHeaderAction {
  request_headers_to_adds?: GoogleComputeSecurityPolicyRuleArgsHeaderActionRequestHeadersToAdds[];
}

export interface GoogleComputeSecurityPolicyRuleArgsMatchConfig {
  src_ip_ranges?: string[];
}

export interface GoogleComputeSecurityPolicyRuleArgsMatchExpr {
  expression: string;
}

export interface GoogleComputeSecurityPolicyRuleArgsMatchExprOptionsRecaptchaOptions {
  action_token_site_keys?: string[];
  session_token_site_keys?: string[];
}

export interface GoogleComputeSecurityPolicyRuleArgsMatchExprOptions {
  recaptcha_options: GoogleComputeSecurityPolicyRuleArgsMatchExprOptionsRecaptchaOptions;
}

export interface GoogleComputeSecurityPolicyRuleArgsMatch {
  versioned_expr?: string;
  config?: GoogleComputeSecurityPolicyRuleArgsMatchConfig;
  expr?: GoogleComputeSecurityPolicyRuleArgsMatchExpr;
  expr_options?: GoogleComputeSecurityPolicyRuleArgsMatchExprOptions;
}

export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestCookie {
  operator: string;
  value?: string;
}

export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestHeader {
  operator: string;
  value?: string;
}

export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestQueryParam {
  operator: string;
  value?: string;
}

export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestUri {
  operator: string;
  value?: string;
}

export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusion {
  target_rule_ids?: string[];
  target_rule_set: string;
  request_cookie?: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestCookie[];
  request_header?: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestHeader[];
  request_query_param?: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestQueryParam[];
  request_uri?: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestUri[];
}

export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfig {
  exclusion?: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusion[];
}

export interface GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsBanThreshold {
  count?: number;
  interval_sec?: number;
}

export interface GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsEnforceOnKeyConfigs {
  enforce_on_key_name?: string;
  enforce_on_key_type?: string;
}

export interface GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsExceedRedirectOptions {
  target?: string;
  type?: string;
}

export interface GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsRateLimitThreshold {
  count?: number;
  interval_sec?: number;
}

export interface GoogleComputeSecurityPolicyRuleArgsRateLimitOptions {
  ban_duration_sec?: number;
  conform_action?: string;
  enforce_on_key?: string;
  enforce_on_key_name?: string;
  exceed_action?: string;
  ban_threshold?: GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsBanThreshold;
  enforce_on_key_configs?: GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsEnforceOnKeyConfigs[];
  exceed_redirect_options?: GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsExceedRedirectOptions;
  rate_limit_threshold?: GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsRateLimitThreshold;
}

export interface GoogleComputeSecurityPolicyRuleArgsRedirectOptions {
  target?: string;
  type?: string;
}

export interface GoogleComputeSecurityPolicyRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeSecurityPolicyRuleArgs {
  action: string;
  description?: string;
  preview?: boolean;
  priority: number;
  security_policy: string;
  header_action?: GoogleComputeSecurityPolicyRuleArgsHeaderAction;
  match?: GoogleComputeSecurityPolicyRuleArgsMatch;
  preconfigured_waf_config?: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfig;
  rate_limit_options?: GoogleComputeSecurityPolicyRuleArgsRateLimitOptions;
  redirect_options?: GoogleComputeSecurityPolicyRuleArgsRedirectOptions;
  timeouts?: GoogleComputeSecurityPolicyRuleArgsTimeouts;
}

export class google_compute_security_policy_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeSecurityPolicyRuleArgs) {
    const meta = {header_action:{isBlock:true,request_headers_to_adds:{isBlock:true}},match:{isBlock:true,config:{isBlock:true},expr:{isBlock:true},expr_options:{isBlock:true,recaptcha_options:{isBlock:true}}},preconfigured_waf_config:{isBlock:true,exclusion:{isBlock:true,request_cookie:{isBlock:true},request_header:{isBlock:true},request_query_param:{isBlock:true},request_uri:{isBlock:true}}},rate_limit_options:{isBlock:true,ban_threshold:{isBlock:true},enforce_on_key_configs:{isBlock:true},exceed_redirect_options:{isBlock:true},rate_limit_threshold:{isBlock:true}},redirect_options:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_security_policy_rule", resourceName);
  }

  get action(): string {
    return `${this.resourceType}.${this.resourceName}.action`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get security_policy(): string {
    return `${this.resourceType}.${this.resourceName}.security_policy`;
  }
}
