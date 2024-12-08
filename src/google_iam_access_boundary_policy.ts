import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIamAccessBoundaryPolicyArgsRulesAccessBoundaryRuleAvailabilityCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleIamAccessBoundaryPolicyArgsRulesAccessBoundaryRule {
  available_permissions?: string[];
  available_resource?: string;
  availability_condition?: GoogleIamAccessBoundaryPolicyArgsRulesAccessBoundaryRuleAvailabilityCondition;
}

export interface GoogleIamAccessBoundaryPolicyArgsRules {
  description?: string;
  access_boundary_rule?: GoogleIamAccessBoundaryPolicyArgsRulesAccessBoundaryRule;
}

export interface GoogleIamAccessBoundaryPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIamAccessBoundaryPolicyArgs {
  display_name?: string;
  name: string;
  parent: string;
  rules: GoogleIamAccessBoundaryPolicyArgsRules[];
  timeouts?: GoogleIamAccessBoundaryPolicyArgsTimeouts;
}

export class google_iam_access_boundary_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIamAccessBoundaryPolicyArgs) {
    const meta = {rules:{isBlock:true,access_boundary_rule:{isBlock:true,availability_condition:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iam_access_boundary_policy", resourceName);
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
