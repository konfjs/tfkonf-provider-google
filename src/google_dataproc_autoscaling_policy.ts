import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocAutoscalingPolicyArgsBasicAlgorithmYarnConfig {
  graceful_decommission_timeout: string;
  scale_down_factor: number;
  scale_down_min_worker_fraction?: number;
  scale_up_factor: number;
  scale_up_min_worker_fraction?: number;
}

export interface GoogleDataprocAutoscalingPolicyArgsBasicAlgorithm {
  cooldown_period?: string;
  yarn_config: GoogleDataprocAutoscalingPolicyArgsBasicAlgorithmYarnConfig;
}

export interface GoogleDataprocAutoscalingPolicyArgsSecondaryWorkerConfig {
  max_instances?: number;
  min_instances?: number;
  weight?: number;
}

export interface GoogleDataprocAutoscalingPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataprocAutoscalingPolicyArgsWorkerConfig {
  max_instances: number;
  min_instances?: number;
  weight?: number;
}

export interface GoogleDataprocAutoscalingPolicyArgs {
  location?: string;
  policy_id: string;
  basic_algorithm?: GoogleDataprocAutoscalingPolicyArgsBasicAlgorithm;
  secondary_worker_config?: GoogleDataprocAutoscalingPolicyArgsSecondaryWorkerConfig;
  timeouts?: GoogleDataprocAutoscalingPolicyArgsTimeouts;
  worker_config?: GoogleDataprocAutoscalingPolicyArgsWorkerConfig;
}

export class google_dataproc_autoscaling_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocAutoscalingPolicyArgs) {
    const meta = {basic_algorithm:{isBlock:true,yarn_config:{isBlock:true}},secondary_worker_config:{isBlock:true},timeouts:{isBlock:true},worker_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_autoscaling_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
