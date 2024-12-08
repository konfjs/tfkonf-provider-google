import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerAzureNodePoolArgsAutoscaling {
  max_node_count: number;
  min_node_count: number;
}

export interface GoogleContainerAzureNodePoolArgsConfigProxyConfig {
  resource_group_id: string;
  secret_id: string;
}

export interface GoogleContainerAzureNodePoolArgsConfigRootVolume {
}

export interface GoogleContainerAzureNodePoolArgsConfigSshConfig {
  authorized_key: string;
}

export interface GoogleContainerAzureNodePoolArgsConfig {
  labels?: { [key: string]: string };
  tags?: { [key: string]: string };
  proxy_config?: GoogleContainerAzureNodePoolArgsConfigProxyConfig;
  root_volume?: GoogleContainerAzureNodePoolArgsConfigRootVolume;
  ssh_config: GoogleContainerAzureNodePoolArgsConfigSshConfig;
}

export interface GoogleContainerAzureNodePoolArgsManagement {
}

export interface GoogleContainerAzureNodePoolArgsMaxPodsConstraint {
  max_pods_per_node: number;
}

export interface GoogleContainerAzureNodePoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleContainerAzureNodePoolArgs {
  annotations?: { [key: string]: string };
  cluster: string;
  location: string;
  name: string;
  subnet_id: string;
  version: string;
  autoscaling: GoogleContainerAzureNodePoolArgsAutoscaling;
  config: GoogleContainerAzureNodePoolArgsConfig;
  management?: GoogleContainerAzureNodePoolArgsManagement;
  max_pods_constraint: GoogleContainerAzureNodePoolArgsMaxPodsConstraint;
  timeouts?: GoogleContainerAzureNodePoolArgsTimeouts;
}

export class google_container_azure_node_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleContainerAzureNodePoolArgs) {
    const meta = {autoscaling:{isBlock:true},config:{isBlock:true,proxy_config:{isBlock:true},root_volume:{isBlock:true},ssh_config:{isBlock:true}},management:{isBlock:true},max_pods_constraint:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_container_azure_node_pool", resourceName);
  }

  get azure_availability_zone(): string {
    return `${this.resourceType}.${this.resourceName}.azure_availability_zone`;
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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

  get subnet_id(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_id`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
