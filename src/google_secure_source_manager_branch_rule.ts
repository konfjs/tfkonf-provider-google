import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecureSourceManagerBranchRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSecureSourceManagerBranchRuleArgs {
  allow_stale_reviews?: boolean;
  branch_rule_id: string;
  disabled?: boolean;
  include_pattern: string;
  location: string;
  minimum_approvals_count?: number;
  minimum_reviews_count?: number;
  repository_id: string;
  require_comments_resolved?: boolean;
  require_linear_history?: boolean;
  require_pull_request?: boolean;
  timeouts?: GoogleSecureSourceManagerBranchRuleArgsTimeouts;
}

export class google_secure_source_manager_branch_rule extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerBranchRuleArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secure_source_manager_branch_rule", resourceName);
  }

  get branch_rule_id(): string {
    return `${this.resourceType}.${this.resourceName}.branch_rule_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get include_pattern(): string {
    return `${this.resourceType}.${this.resourceName}.include_pattern`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get repository_id(): string {
    return `${this.resourceType}.${this.resourceName}.repository_id`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
