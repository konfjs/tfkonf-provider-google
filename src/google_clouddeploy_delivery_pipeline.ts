import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesDeployParameters {
  match_target_labels?: { [key: string]: string };
  values: { [key: string]: string };
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy {
  actions?: string[];
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy {
  actions?: string[];
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCanaryDeployment {
  percentages: number[];
  verify?: boolean;
  postdeploy?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy;
  predeploy?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy;
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy {
  actions?: string[];
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy {
  actions?: string[];
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs {
  percentage: number;
  phase_id: string;
  profiles?: string[];
  verify?: boolean;
  postdeploy?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy;
  predeploy?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy;
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCustomCanaryDeployment {
  phase_configs: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[];
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun {
  automatic_traffic_control?: boolean;
  canary_revision_tags?: string[];
  prior_revision_tags?: string[];
  stable_revision_tags?: string[];
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh {
  deployment: string;
  http_route: string;
  pod_selector_label?: string;
  route_update_wait_time?: string;
  service: string;
  stable_cutback_duration?: string;
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking {
  deployment: string;
  disable_pod_overprovisioning?: boolean;
  pod_selector_label?: string;
  service: string;
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes {
  gateway_service_mesh?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh;
  service_networking?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking;
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryRuntimeConfig {
  cloud_run?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun;
  kubernetes?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes;
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanary {
  canary_deployment?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCanaryDeployment;
  custom_canary_deployment?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryCustomCanaryDeployment;
  runtime_config?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanaryRuntimeConfig;
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyStandardPostdeploy {
  actions?: string[];
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyStandardPredeploy {
  actions?: string[];
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyStandard {
  verify?: boolean;
  postdeploy?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyStandardPostdeploy;
  predeploy?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyStandardPredeploy;
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategy {
  canary?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyCanary;
  standard?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategyStandard;
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelineStages {
  profiles?: string[];
  target_id?: string;
  deploy_parameters?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesDeployParameters[];
  strategy?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStagesStrategy;
}

export interface GoogleClouddeployDeliveryPipelineArgsSerialPipeline {
  stages?: GoogleClouddeployDeliveryPipelineArgsSerialPipelineStages[];
}

export interface GoogleClouddeployDeliveryPipelineArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleClouddeployDeliveryPipelineArgs {
  annotations?: { [key: string]: string };
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  suspended?: boolean;
  serial_pipeline?: GoogleClouddeployDeliveryPipelineArgsSerialPipeline;
  timeouts?: GoogleClouddeployDeliveryPipelineArgsTimeouts;
}

export class google_clouddeploy_delivery_pipeline extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleClouddeployDeliveryPipelineArgs) {
    const meta = {serial_pipeline:{isBlock:true,stages:{isBlock:true,deploy_parameters:{isBlock:true},strategy:{isBlock:true,canary:{isBlock:true,canary_deployment:{isBlock:true,postdeploy:{isBlock:true},predeploy:{isBlock:true}},custom_canary_deployment:{isBlock:true,phase_configs:{isBlock:true,postdeploy:{isBlock:true},predeploy:{isBlock:true}}},runtime_config:{isBlock:true,cloud_run:{isBlock:true},kubernetes:{isBlock:true,gateway_service_mesh:{isBlock:true},service_networking:{isBlock:true}}}},standard:{isBlock:true,postdeploy:{isBlock:true},predeploy:{isBlock:true}}}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_clouddeploy_delivery_pipeline", resourceName);
  }

  get condition(): string {
    return `${this.resourceType}.${this.resourceName}.condition`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
