import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOrgPolicyPolicyArgsDryRunSpecRulesCondition {
  description?: string;
  expression?: string;
  location?: string;
  title?: string;
}

export interface GoogleOrgPolicyPolicyArgsDryRunSpecRulesValues {
  allowed_values?: string[];
  denied_values?: string[];
}

export interface GoogleOrgPolicyPolicyArgsDryRunSpecRules {
  allow_all?: string;
  deny_all?: string;
  enforce?: string;
  condition?: GoogleOrgPolicyPolicyArgsDryRunSpecRulesCondition;
  values?: GoogleOrgPolicyPolicyArgsDryRunSpecRulesValues;
}

export interface GoogleOrgPolicyPolicyArgsDryRunSpec {
  inherit_from_parent?: boolean;
  reset?: boolean;
  rules?: GoogleOrgPolicyPolicyArgsDryRunSpecRules[];
}

export interface GoogleOrgPolicyPolicyArgsSpecRulesCondition {
  description?: string;
  expression?: string;
  location?: string;
  title?: string;
}

export interface GoogleOrgPolicyPolicyArgsSpecRulesValues {
  allowed_values?: string[];
  denied_values?: string[];
}

export interface GoogleOrgPolicyPolicyArgsSpecRules {
  allow_all?: string;
  deny_all?: string;
  enforce?: string;
  condition?: GoogleOrgPolicyPolicyArgsSpecRulesCondition;
  values?: GoogleOrgPolicyPolicyArgsSpecRulesValues;
}

export interface GoogleOrgPolicyPolicyArgsSpec {
  inherit_from_parent?: boolean;
  reset?: boolean;
  rules?: GoogleOrgPolicyPolicyArgsSpecRules[];
}

export interface GoogleOrgPolicyPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleOrgPolicyPolicyArgs {
  name: string;
  parent: string;
  dry_run_spec?: GoogleOrgPolicyPolicyArgsDryRunSpec;
  spec?: GoogleOrgPolicyPolicyArgsSpec;
  timeouts?: GoogleOrgPolicyPolicyArgsTimeouts;
}

export class google_org_policy_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleOrgPolicyPolicyArgs) {
    const meta = {dry_run_spec:{isBlock:true,rules:{isBlock:true,condition:{isBlock:true},values:{isBlock:true}}},spec:{isBlock:true,rules:{isBlock:true,condition:{isBlock:true},values:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_org_policy_policy", resourceName);
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
