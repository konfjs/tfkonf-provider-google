import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubScopeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeHubScopeArgs {
  labels?: { [key: string]: string };
  namespace_labels?: { [key: string]: string };
  scope_id: string;
  timeouts?: GoogleGkeHubScopeArgsTimeouts;
}

export class google_gke_hub_scope extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleGkeHubScopeArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gke_hub_scope", resourceName);
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
