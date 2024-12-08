import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIamDenyPolicyArgsRulesDenyRuleDenialCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleIamDenyPolicyArgsRulesDenyRule {
  denied_permissions?: string[];
  denied_principals?: string[];
  exception_permissions?: string[];
  exception_principals?: string[];
  denial_condition?: GoogleIamDenyPolicyArgsRulesDenyRuleDenialCondition;
}

export interface GoogleIamDenyPolicyArgsRules {
  description?: string;
  deny_rule?: GoogleIamDenyPolicyArgsRulesDenyRule;
}

export interface GoogleIamDenyPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIamDenyPolicyArgs {
  display_name?: string;
  name: string;
  parent: string;
  rules: GoogleIamDenyPolicyArgsRules[];
  timeouts?: GoogleIamDenyPolicyArgsTimeouts;
}

export class google_iam_deny_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIamDenyPolicyArgs) {
    const meta = {rules:{isBlock:true,deny_rule:{isBlock:true,denial_condition:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iam_deny_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }
}
