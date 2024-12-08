import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGit {
  path?: string;
  ref?: string;
  repo: string;
}

export interface GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo {
  path?: string;
  ref?: string;
  repository: string;
}

export interface GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGoogleCloudStorage {
  path?: string;
  source: string;
}

export interface GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModules {
  configs?: string[];
  git?: GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGit;
  google_cloud_build_repo?: GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo;
  google_cloud_storage?: GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGoogleCloudStorage;
}

export interface GoogleClouddeployCustomTargetTypeArgsCustomActions {
  deploy_action: string;
  render_action?: string;
  include_skaffold_modules?: GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModules[];
}

export interface GoogleClouddeployCustomTargetTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleClouddeployCustomTargetTypeArgs {
  annotations?: { [key: string]: string };
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  custom_actions?: GoogleClouddeployCustomTargetTypeArgsCustomActions;
  timeouts?: GoogleClouddeployCustomTargetTypeArgsTimeouts;
}

export class google_clouddeploy_custom_target_type extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleClouddeployCustomTargetTypeArgs) {
    const meta = {custom_actions:{isBlock:true,include_skaffold_modules:{isBlock:true,git:{isBlock:true},google_cloud_build_repo:{isBlock:true},google_cloud_storage:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_clouddeploy_custom_target_type", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get custom_target_type_id(): string {
    return `${this.resourceType}.${this.resourceName}.custom_target_type_id`;
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
