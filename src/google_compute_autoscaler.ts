import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeAutoscalerArgsAutoscalingPolicyCpuUtilization {
  predictive_method?: string;
  target: number;
}

export interface GoogleComputeAutoscalerArgsAutoscalingPolicyLoadBalancingUtilization {
  target: number;
}

export interface GoogleComputeAutoscalerArgsAutoscalingPolicyMetric {
  name: string;
  target?: number;
  type?: string;
}

export interface GoogleComputeAutoscalerArgsAutoscalingPolicyScaleInControlMaxScaledInReplicas {
  fixed?: number;
  percent?: number;
}

export interface GoogleComputeAutoscalerArgsAutoscalingPolicyScaleInControl {
  time_window_sec?: number;
  max_scaled_in_replicas?: GoogleComputeAutoscalerArgsAutoscalingPolicyScaleInControlMaxScaledInReplicas;
}

export interface GoogleComputeAutoscalerArgsAutoscalingPolicyScalingSchedules {
  description?: string;
  disabled?: boolean;
  duration_sec: number;
  min_required_replicas: number;
  name: string;
  schedule: string;
  time_zone?: string;
}

export interface GoogleComputeAutoscalerArgsAutoscalingPolicy {
  cooldown_period?: number;
  max_replicas: number;
  min_replicas: number;
  mode?: string;
  cpu_utilization?: GoogleComputeAutoscalerArgsAutoscalingPolicyCpuUtilization;
  load_balancing_utilization?: GoogleComputeAutoscalerArgsAutoscalingPolicyLoadBalancingUtilization;
  metric?: GoogleComputeAutoscalerArgsAutoscalingPolicyMetric[];
  scale_in_control?: GoogleComputeAutoscalerArgsAutoscalingPolicyScaleInControl;
  scaling_schedules?: GoogleComputeAutoscalerArgsAutoscalingPolicyScalingSchedules[];
}

export interface GoogleComputeAutoscalerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeAutoscalerArgs {
  description?: string;
  name: string;
  target: string;
  autoscaling_policy: GoogleComputeAutoscalerArgsAutoscalingPolicy;
  timeouts?: GoogleComputeAutoscalerArgsTimeouts;
}

export class google_compute_autoscaler extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeAutoscalerArgs) {
    const meta = {autoscaling_policy:{isBlock:true,cpu_utilization:{isBlock:true},load_balancing_utilization:{isBlock:true},metric:{isBlock:true},scale_in_control:{isBlock:true,max_scaled_in_replicas:{isBlock:true}},scaling_schedules:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_autoscaler", resourceName);
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

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get target(): string {
    return `${this.resourceType}.${this.resourceName}.target`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
