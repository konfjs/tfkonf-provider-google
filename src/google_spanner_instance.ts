import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits {
  max_nodes: number;
  min_nodes: number;
}

export interface GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsOverrides {
  autoscaling_limits: GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits;
}

export interface GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection {
  location: string;
}

export interface GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptions {
  overrides: GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsOverrides;
  replica_selection: GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection;
}

export interface GoogleSpannerInstanceArgsAutoscalingConfigAutoscalingLimits {
  max_nodes?: number;
  max_processing_units?: number;
  min_nodes?: number;
  min_processing_units?: number;
}

export interface GoogleSpannerInstanceArgsAutoscalingConfigAutoscalingTargets {
  high_priority_cpu_utilization_percent?: number;
  storage_utilization_percent?: number;
}

export interface GoogleSpannerInstanceArgsAutoscalingConfig {
  asymmetric_autoscaling_options?: GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptions[];
  autoscaling_limits?: GoogleSpannerInstanceArgsAutoscalingConfigAutoscalingLimits;
  autoscaling_targets?: GoogleSpannerInstanceArgsAutoscalingConfigAutoscalingTargets;
}

export interface GoogleSpannerInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSpannerInstanceArgs {
  config: string;
  display_name: string;
  force_destroy?: boolean;
  labels?: { [key: string]: string };
  autoscaling_config?: GoogleSpannerInstanceArgsAutoscalingConfig;
  timeouts?: GoogleSpannerInstanceArgsTimeouts;
}

export class google_spanner_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSpannerInstanceArgs) {
    const meta = {autoscaling_config:{isBlock:true,asymmetric_autoscaling_options:{isBlock:true,overrides:{isBlock:true,autoscaling_limits:{isBlock:true}},replica_selection:{isBlock:true}},autoscaling_limits:{isBlock:true},autoscaling_targets:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_spanner_instance", resourceName);
  }

  get config(): string {
    return `${this.resourceType}.${this.resourceName}.config`;
  }

  get default_backup_schedule_type(): string {
    return `${this.resourceType}.${this.resourceName}.default_backup_schedule_type`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get edition(): string {
    return `${this.resourceType}.${this.resourceName}.edition`;
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

  get num_nodes(): string {
    return `${this.resourceType}.${this.resourceName}.num_nodes`;
  }

  get processing_units(): string {
    return `${this.resourceType}.${this.resourceName}.processing_units`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
