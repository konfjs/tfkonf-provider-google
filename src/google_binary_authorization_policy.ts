import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBinaryAuthorizationPolicyArgsAdmissionWhitelistPatterns {
  name_pattern: string;
}

export interface GoogleBinaryAuthorizationPolicyArgsClusterAdmissionRules {
  cluster: string;
  enforcement_mode: string;
  evaluation_mode: string;
  require_attestations_by?: string[];
}

export interface GoogleBinaryAuthorizationPolicyArgsDefaultAdmissionRule {
  enforcement_mode: string;
  evaluation_mode: string;
  require_attestations_by?: string[];
}

export interface GoogleBinaryAuthorizationPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBinaryAuthorizationPolicyArgs {
  description?: string;
  admission_whitelist_patterns?: GoogleBinaryAuthorizationPolicyArgsAdmissionWhitelistPatterns[];
  cluster_admission_rules?: GoogleBinaryAuthorizationPolicyArgsClusterAdmissionRules[];
  default_admission_rule: GoogleBinaryAuthorizationPolicyArgsDefaultAdmissionRule;
  timeouts?: GoogleBinaryAuthorizationPolicyArgsTimeouts;
}

export class google_binary_authorization_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBinaryAuthorizationPolicyArgs) {
    const meta = {admission_whitelist_patterns:{isBlock:true},cluster_admission_rules:{isBlock:true},default_admission_rule:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_binary_authorization_policy", resourceName);
  }

  get global_policy_evaluation_mode(): string {
    return `${this.resourceType}.${this.resourceName}.global_policy_evaluation_mode`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
