import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesComplianceStandards {
  control?: string;
  standard?: string;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues {
  allowed_values?: string[];
  denied_values?: string[];
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules {
  allow_all?: boolean;
  deny_all?: boolean;
  enforce?: boolean;
  condition?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition;
  values?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraint {
  canned_constraint_id: string;
  policy_rules: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules[];
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint {
  action_type: string;
  condition: string;
  description?: string;
  display_name?: string;
  method_types: string[];
  name: string;
  resource_types: string[];
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues {
  allowed_values?: string[];
  denied_values?: string[];
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules {
  allow_all?: boolean;
  deny_all?: boolean;
  enforce?: boolean;
  condition?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition;
  values?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintCustom {
  custom_constraint?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint;
  policy_rules: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules[];
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties {
  name: string;
  value_expression?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput {
  properties?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties[];
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector {
  resource_types: string[];
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig {
  description?: string;
  recommendation?: string;
  severity: string;
  custom_output?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput;
  predicate: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate;
  resource_selector: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule {
  display_name?: string;
  module_enablement_state?: string;
  config: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsModule {
  module_enablement_state?: string;
  module_name: string;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraint {
  org_policy_constraint?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraint;
  org_policy_constraint_custom?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintOrgPolicyConstraintCustom;
  security_health_analytics_custom_module?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule;
  security_health_analytics_module?: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraintSecurityHealthAnalyticsModule;
}

export interface GoogleSecurityposturePostureArgsPolicySetsPolicies {
  description?: string;
  policy_id: string;
  compliance_standards?: GoogleSecurityposturePostureArgsPolicySetsPoliciesComplianceStandards[];
  constraint: GoogleSecurityposturePostureArgsPolicySetsPoliciesConstraint;
}

export interface GoogleSecurityposturePostureArgsPolicySets {
  description?: string;
  policy_set_id: string;
  policies: GoogleSecurityposturePostureArgsPolicySetsPolicies[];
}

export interface GoogleSecurityposturePostureArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSecurityposturePostureArgs {
  description?: string;
  location: string;
  parent: string;
  posture_id: string;
  state: string;
  policy_sets: GoogleSecurityposturePostureArgsPolicySets[];
  timeouts?: GoogleSecurityposturePostureArgsTimeouts;
}

export class google_securityposture_posture extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSecurityposturePostureArgs) {
    const meta = {policy_sets:{isBlock:true,policies:{isBlock:true,compliance_standards:{isBlock:true},constraint:{isBlock:true,org_policy_constraint:{isBlock:true,policy_rules:{isBlock:true,condition:{isBlock:true},values:{isBlock:true}}},org_policy_constraint_custom:{isBlock:true,custom_constraint:{isBlock:true},policy_rules:{isBlock:true,condition:{isBlock:true},values:{isBlock:true}}},security_health_analytics_custom_module:{isBlock:true,config:{isBlock:true,custom_output:{isBlock:true,properties:{isBlock:true,value_expression:{isBlock:true}}},predicate:{isBlock:true},resource_selector:{isBlock:true}}},security_health_analytics_module:{isBlock:true}}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_securityposture_posture", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get posture_id(): string {
    return `${this.resourceType}.${this.resourceName}.posture_id`;
  }

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get revision_id(): string {
    return `${this.resourceType}.${this.resourceName}.revision_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
