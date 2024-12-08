import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfigNodeConfigs {
  labels?: { [key: string]: string };
  node_ip?: string;
}

export interface GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfigTaints {
  effect?: string;
  key?: string;
  value?: string;
}

export interface GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfig {
  node_configs: GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfigNodeConfigs[];
  taints?: GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfigTaints[];
}

export interface GoogleGkeonpremBareMetalNodePoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeonpremBareMetalNodePoolArgs {
  annotations?: { [key: string]: string };
  bare_metal_cluster: string;
  display_name?: string;
  location: string;
  name: string;
  node_pool_config: GoogleGkeonpremBareMetalNodePoolArgsNodePoolConfig;
  timeouts?: GoogleGkeonpremBareMetalNodePoolArgsTimeouts;
}

export class google_gkeonprem_bare_metal_node_pool extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleGkeonpremBareMetalNodePoolArgs) {
    const meta = {node_pool_config:{isBlock:true,node_configs:{isBlock:true},taints:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gkeonprem_bare_metal_node_pool", resourceName);
  }

  get bare_metal_cluster(): string {
    return `${this.resourceType}.${this.resourceName}.bare_metal_cluster`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get delete_time(): string {
    return `${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
