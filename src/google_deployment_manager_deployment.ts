import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDeploymentManagerDeploymentArgsLabels {
  key?: string;
  value?: string;
}

export interface GoogleDeploymentManagerDeploymentArgsTargetConfig {
  content: string;
}

export interface GoogleDeploymentManagerDeploymentArgsTargetImports {
  content?: string;
  name?: string;
}

export interface GoogleDeploymentManagerDeploymentArgsTarget {
  config: GoogleDeploymentManagerDeploymentArgsTargetConfig;
  imports?: GoogleDeploymentManagerDeploymentArgsTargetImports[];
}

export interface GoogleDeploymentManagerDeploymentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDeploymentManagerDeploymentArgs {
  create_policy?: string;
  delete_policy?: string;
  description?: string;
  name: string;
  preview?: boolean;
  labels?: GoogleDeploymentManagerDeploymentArgsLabels[];
  target: GoogleDeploymentManagerDeploymentArgsTarget;
  timeouts?: GoogleDeploymentManagerDeploymentArgsTimeouts;
}

export class google_deployment_manager_deployment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDeploymentManagerDeploymentArgs) {
    const meta = {labels:{isBlock:true},target:{isBlock:true,config:{isBlock:true},imports:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_deployment_manager_deployment", resourceName);
  }

  get deployment_id(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get manifest(): string {
    return `${this.resourceType}.${this.resourceName}.manifest`;
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
}
