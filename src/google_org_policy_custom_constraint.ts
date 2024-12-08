import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOrgPolicyCustomConstraintArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleOrgPolicyCustomConstraintArgs {
  action_type: string;
  condition: string;
  description?: string;
  display_name?: string;
  method_types: string[];
  name: string;
  parent: string;
  resource_types: string[];
  timeouts?: GoogleOrgPolicyCustomConstraintArgsTimeouts;
}

export class google_org_policy_custom_constraint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleOrgPolicyCustomConstraintArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_org_policy_custom_constraint", resourceName);
  }

  get action_type(): string {
    return `${this.resourceType}.${this.resourceName}.action_type`;
  }

  get condition(): string {
    return `${this.resourceType}.${this.resourceName}.condition`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get method_types(): string {
    return `${this.resourceType}.${this.resourceName}.method_types`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get resource_types(): string {
    return `${this.resourceType}.${this.resourceName}.resource_types`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
