import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigtableInstanceArgsClusterAutoscalingConfig {
  cpu_target: number;
  max_nodes: number;
  min_nodes: number;
}

export interface GoogleBigtableInstanceArgsCluster {
  cluster_id: string;
  storage_type?: string;
  autoscaling_config?: GoogleBigtableInstanceArgsClusterAutoscalingConfig;
}

export interface GoogleBigtableInstanceArgsTimeouts {
  create?: string;
  read?: string;
  update?: string;
}

export interface GoogleBigtableInstanceArgs {
  deletion_protection?: boolean;
  force_destroy?: boolean;
  instance_type?: string;
  labels?: { [key: string]: string };
  name: string;
  cluster?: GoogleBigtableInstanceArgsCluster[];
  timeouts?: GoogleBigtableInstanceArgsTimeouts;
}

export class google_bigtable_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigtableInstanceArgs) {
    const meta = {cluster:{isBlock:true,autoscaling_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigtable_instance", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
