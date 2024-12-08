import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNodeGroupArgsAutoscalingPolicy {
}

export interface GoogleComputeNodeGroupArgsMaintenanceWindow {
  start_time: string;
}

export interface GoogleComputeNodeGroupArgsShareSettingsProjectMap {
  id: string;
  project_id: string;
}

export interface GoogleComputeNodeGroupArgsShareSettings {
  share_type: string;
  project_map?: GoogleComputeNodeGroupArgsShareSettingsProjectMap[];
}

export interface GoogleComputeNodeGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeNodeGroupArgs {
  description?: string;
  initial_size?: number;
  maintenance_policy?: string;
  name?: string;
  node_template: string;
  autoscaling_policy?: GoogleComputeNodeGroupArgsAutoscalingPolicy;
  maintenance_window?: GoogleComputeNodeGroupArgsMaintenanceWindow;
  share_settings?: GoogleComputeNodeGroupArgsShareSettings;
  timeouts?: GoogleComputeNodeGroupArgsTimeouts;
}

export class google_compute_node_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeNodeGroupArgs) {
    const meta = {autoscaling_policy:{isBlock:true},maintenance_window:{isBlock:true},share_settings:{isBlock:true,project_map:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_node_group", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get node_template(): string {
    return `${this.resourceType}.${this.resourceName}.node_template`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get size(): string {
    return `${this.resourceType}.${this.resourceName}.size`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
