import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyCpuUtilization {
  predictive_method?: string;
  target: number;
}

export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyLoadBalancingUtilization {
  target: number;
}

export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyMetric {
  filter?: string;
  name: string;
  single_instance_assignment?: number;
  target?: number;
  type?: string;
}

export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScaleInControlMaxScaledInReplicas {
  fixed?: number;
  percent?: number;
}

export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScaleInControl {
  time_window_sec?: number;
  max_scaled_in_replicas?: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScaleInControlMaxScaledInReplicas;
}

export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScalingSchedules {
  description?: string;
  disabled?: boolean;
  duration_sec: number;
  min_required_replicas: number;
  name: string;
  schedule: string;
  time_zone?: string;
}

export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicy {
  cooldown_period?: number;
  max_replicas: number;
  min_replicas: number;
  mode?: string;
  cpu_utilization?: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyCpuUtilization;
  load_balancing_utilization?: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyLoadBalancingUtilization;
  metric?: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyMetric[];
  scale_in_control?: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScaleInControl;
  scaling_schedules?: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScalingSchedules[];
}

export interface GoogleComputeRegionAutoscalerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionAutoscalerArgs {
  description?: string;
  name: string;
  target: string;
  autoscaling_policy: GoogleComputeRegionAutoscalerArgsAutoscalingPolicy;
  timeouts?: GoogleComputeRegionAutoscalerArgsTimeouts;
}

export class google_compute_region_autoscaler extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionAutoscalerArgs) {
    const meta = {autoscaling_policy:{isBlock:true,cpu_utilization:{isBlock:true},load_balancing_utilization:{isBlock:true},metric:{isBlock:true},scale_in_control:{isBlock:true,max_scaled_in_replicas:{isBlock:true}},scaling_schedules:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_autoscaler", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
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

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get target(): string {
    return `${this.resourceType}.${this.resourceName}.target`;
  }
}
