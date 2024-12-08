import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeonpremVmwareNodePoolArgsConfigTaints {
  effect?: string;
  key: string;
  value: string;
}

export interface GoogleGkeonpremVmwareNodePoolArgsConfigVsphereConfigTags {
  category?: string;
  tag?: string;
}

export interface GoogleGkeonpremVmwareNodePoolArgsConfigVsphereConfig {
  datastore?: string;
  host_groups?: string[];
  tags?: GoogleGkeonpremVmwareNodePoolArgsConfigVsphereConfigTags[];
}

export interface GoogleGkeonpremVmwareNodePoolArgsConfig {
  boot_disk_size_gb?: number;
  cpus?: number;
  enable_load_balancer?: boolean;
  image?: string;
  image_type: string;
  memory_mb?: number;
  replicas?: number;
  taints?: GoogleGkeonpremVmwareNodePoolArgsConfigTaints[];
  vsphere_config?: GoogleGkeonpremVmwareNodePoolArgsConfigVsphereConfig;
}

export interface GoogleGkeonpremVmwareNodePoolArgsNodePoolAutoscaling {
  max_replicas: number;
  min_replicas: number;
}

export interface GoogleGkeonpremVmwareNodePoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeonpremVmwareNodePoolArgs {
  annotations?: { [key: string]: string };
  display_name?: string;
  location: string;
  name: string;
  vmware_cluster: string;
  config: GoogleGkeonpremVmwareNodePoolArgsConfig;
  node_pool_autoscaling?: GoogleGkeonpremVmwareNodePoolArgsNodePoolAutoscaling;
  timeouts?: GoogleGkeonpremVmwareNodePoolArgsTimeouts;
}

export class google_gkeonprem_vmware_node_pool extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleGkeonpremVmwareNodePoolArgs) {
    const meta = {config:{isBlock:true,taints:{isBlock:true},vsphere_config:{isBlock:true,tags:{isBlock:true}}},node_pool_autoscaling:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gkeonprem_vmware_node_pool", resourceName);
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

  get on_prem_version(): string {
    return `${this.resourceType}.${this.resourceName}.on_prem_version`;
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

  get vmware_cluster(): string {
    return `${this.resourceType}.${this.resourceName}.vmware_cluster`;
  }
}
