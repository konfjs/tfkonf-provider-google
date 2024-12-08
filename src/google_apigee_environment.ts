import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvironmentArgsNodeConfig {
  max_node_count?: string;
  min_node_count?: string;
}

export interface GoogleApigeeEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeEnvironmentArgs {
  description?: string;
  display_name?: string;
  forward_proxy_uri?: string;
  name: string;
  org_id: string;
  node_config?: GoogleApigeeEnvironmentArgsNodeConfig;
  timeouts?: GoogleApigeeEnvironmentArgsTimeouts;
}

export class google_apigee_environment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentArgs) {
    const meta = {node_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_environment", resourceName);
  }

  get api_proxy_type(): string {
    return `${this.resourceType}.${this.resourceName}.api_proxy_type`;
  }

  get deployment_type(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
