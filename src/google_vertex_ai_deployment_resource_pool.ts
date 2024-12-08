import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiDeploymentResourcePoolArgsDedicatedResourcesAutoscalingMetricSpecs {
  metric_name: string;
  target?: number;
}

export interface GoogleVertexAiDeploymentResourcePoolArgsDedicatedResourcesMachineSpec {
  accelerator_count?: number;
  accelerator_type?: string;
  machine_type?: string;
}

export interface GoogleVertexAiDeploymentResourcePoolArgsDedicatedResources {
  max_replica_count?: number;
  min_replica_count: number;
  autoscaling_metric_specs?: GoogleVertexAiDeploymentResourcePoolArgsDedicatedResourcesAutoscalingMetricSpecs[];
  machine_spec: GoogleVertexAiDeploymentResourcePoolArgsDedicatedResourcesMachineSpec;
}

export interface GoogleVertexAiDeploymentResourcePoolArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleVertexAiDeploymentResourcePoolArgs {
  name: string;
  region?: string;
  dedicated_resources?: GoogleVertexAiDeploymentResourcePoolArgsDedicatedResources;
  timeouts?: GoogleVertexAiDeploymentResourcePoolArgsTimeouts;
}

export class google_vertex_ai_deployment_resource_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleVertexAiDeploymentResourcePoolArgs) {
    const meta = {dedicated_resources:{isBlock:true,autoscaling_metric_specs:{isBlock:true},machine_spec:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_deployment_resource_pool", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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
}
