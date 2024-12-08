import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubScopeRbacRoleBindingArgsRole {
  predefined_role?: string;
}

export interface GoogleGkeHubScopeRbacRoleBindingArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeHubScopeRbacRoleBindingArgs {
  group?: string;
  labels?: { [key: string]: string };
  scope_id: string;
  scope_rbac_role_binding_id: string;
  user?: string;
  role: GoogleGkeHubScopeRbacRoleBindingArgsRole;
  timeouts?: GoogleGkeHubScopeRbacRoleBindingArgsTimeouts;
}

export class google_gke_hub_scope_rbac_role_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleGkeHubScopeRbacRoleBindingArgs) {
    const meta = {role:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gke_hub_scope_rbac_role_binding", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get delete_time(): string {
    return `${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get scope_id(): string {
    return `${this.resourceType}.${this.resourceName}.scope_id`;
  }

  get scope_rbac_role_binding_id(): string {
    return `${this.resourceType}.${this.resourceName}.scope_rbac_role_binding_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
