import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecurityposturePostureDeploymentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSecurityposturePostureDeploymentArgs {
  description?: string;
  location: string;
  parent: string;
  posture_deployment_id: string;
  posture_id: string;
  posture_revision_id: string;
  target_resource: string;
  timeouts?: GoogleSecurityposturePostureDeploymentArgsTimeouts;
}

export class google_securityposture_posture_deployment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSecurityposturePostureDeploymentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_securityposture_posture_deployment", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get desired_posture_id(): string {
    return `${this.resourceType}.${this.resourceName}.desired_posture_id`;
  }

  get desired_posture_revision_id(): string {
    return `${this.resourceType}.${this.resourceName}.desired_posture_revision_id`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get failure_message(): string {
    return `${this.resourceType}.${this.resourceName}.failure_message`;
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

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get posture_deployment_id(): string {
    return `${this.resourceType}.${this.resourceName}.posture_deployment_id`;
  }

  get posture_id(): string {
    return `${this.resourceType}.${this.resourceName}.posture_id`;
  }

  get posture_revision_id(): string {
    return `${this.resourceType}.${this.resourceName}.posture_revision_id`;
  }

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get target_resource(): string {
    return `${this.resourceType}.${this.resourceName}.target_resource`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
