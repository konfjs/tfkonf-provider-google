import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerAwsNodePoolArgsAutoscaling {
  max_node_count: number;
  min_node_count: number;
}

export interface GoogleContainerAwsNodePoolArgsConfigAutoscalingMetricsCollection {
  granularity: string;
  metrics?: string[];
}

export interface GoogleContainerAwsNodePoolArgsConfigConfigEncryption {
  kms_key_arn: string;
}

export interface GoogleContainerAwsNodePoolArgsConfigProxyConfig {
  secret_arn: string;
  secret_version: string;
}

export interface GoogleContainerAwsNodePoolArgsConfigRootVolume {
  kms_key_arn?: string;
}

export interface GoogleContainerAwsNodePoolArgsConfigSshConfig {
  ec2_key_pair: string;
}

export interface GoogleContainerAwsNodePoolArgsConfigTaints {
  effect: string;
  key: string;
  value: string;
}

export interface GoogleContainerAwsNodePoolArgsConfig {
  iam_instance_profile: string;
  labels?: { [key: string]: string };
  security_group_ids?: string[];
  tags?: { [key: string]: string };
  autoscaling_metrics_collection?: GoogleContainerAwsNodePoolArgsConfigAutoscalingMetricsCollection;
  config_encryption: GoogleContainerAwsNodePoolArgsConfigConfigEncryption;
  proxy_config?: GoogleContainerAwsNodePoolArgsConfigProxyConfig;
  root_volume?: GoogleContainerAwsNodePoolArgsConfigRootVolume;
  ssh_config?: GoogleContainerAwsNodePoolArgsConfigSshConfig;
  taints?: GoogleContainerAwsNodePoolArgsConfigTaints[];
}

export interface GoogleContainerAwsNodePoolArgsKubeletConfig {
  cpu_cfs_quota_period?: string;
  pod_pids_limit?: number;
}

export interface GoogleContainerAwsNodePoolArgsManagement {
}

export interface GoogleContainerAwsNodePoolArgsMaxPodsConstraint {
  max_pods_per_node: number;
}

export interface GoogleContainerAwsNodePoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleContainerAwsNodePoolArgsUpdateSettingsSurgeSettings {
}

export interface GoogleContainerAwsNodePoolArgsUpdateSettings {
  surge_settings?: GoogleContainerAwsNodePoolArgsUpdateSettingsSurgeSettings;
}

export interface GoogleContainerAwsNodePoolArgs {
  annotations?: { [key: string]: string };
  cluster: string;
  location: string;
  name: string;
  subnet_id: string;
  version: string;
  autoscaling: GoogleContainerAwsNodePoolArgsAutoscaling;
  config: GoogleContainerAwsNodePoolArgsConfig;
  kubelet_config?: GoogleContainerAwsNodePoolArgsKubeletConfig;
  management?: GoogleContainerAwsNodePoolArgsManagement;
  max_pods_constraint: GoogleContainerAwsNodePoolArgsMaxPodsConstraint;
  timeouts?: GoogleContainerAwsNodePoolArgsTimeouts;
  update_settings?: GoogleContainerAwsNodePoolArgsUpdateSettings;
}

export class google_container_aws_node_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleContainerAwsNodePoolArgs) {
    const meta = {autoscaling:{isBlock:true},config:{isBlock:true,autoscaling_metrics_collection:{isBlock:true},config_encryption:{isBlock:true},proxy_config:{isBlock:true},root_volume:{isBlock:true},ssh_config:{isBlock:true},taints:{isBlock:true}},kubelet_config:{isBlock:true},management:{isBlock:true},max_pods_constraint:{isBlock:true},timeouts:{isBlock:true},update_settings:{isBlock:true,surge_settings:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "google_container_aws_node_pool", resourceName);
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
