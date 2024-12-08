import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleClouddeployTargetArgsAnthosCluster {
  membership?: string;
}

export interface GoogleClouddeployTargetArgsCustomTarget {
  custom_target_type: string;
}

export interface GoogleClouddeployTargetArgsExecutionConfigs {
  usages: string[];
  verbose?: boolean;
  worker_pool?: string;
}

export interface GoogleClouddeployTargetArgsGke {
  cluster?: string;
  internal_ip?: boolean;
  proxy_url?: string;
}

export interface GoogleClouddeployTargetArgsMultiTarget {
  target_ids: string[];
}

export interface GoogleClouddeployTargetArgsRun {
  location: string;
}

export interface GoogleClouddeployTargetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleClouddeployTargetArgs {
  annotations?: { [key: string]: string };
  deploy_parameters?: { [key: string]: string };
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  require_approval?: boolean;
  anthos_cluster?: GoogleClouddeployTargetArgsAnthosCluster;
  custom_target?: GoogleClouddeployTargetArgsCustomTarget;
  execution_configs?: GoogleClouddeployTargetArgsExecutionConfigs[];
  gke?: GoogleClouddeployTargetArgsGke;
  multi_target?: GoogleClouddeployTargetArgsMultiTarget;
  run?: GoogleClouddeployTargetArgsRun;
  timeouts?: GoogleClouddeployTargetArgsTimeouts;
}

export class google_clouddeploy_target extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleClouddeployTargetArgs) {
    const meta = {anthos_cluster:{isBlock:true},custom_target:{isBlock:true},execution_configs:{isBlock:true},gke:{isBlock:true},multi_target:{isBlock:true},run:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_clouddeploy_target", resourceName);
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

  get target_id(): string {
    return `${this.resourceType}.${this.resourceName}.target_id`;
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
