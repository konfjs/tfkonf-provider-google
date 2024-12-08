import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudfunctions2FunctionArgsBuildConfigAutomaticUpdatePolicy {
}

export interface GoogleCloudfunctions2FunctionArgsBuildConfigOnDeployUpdatePolicy {
}

export interface GoogleCloudfunctions2FunctionArgsBuildConfigSourceRepoSource {
  branch_name?: string;
  commit_sha?: string;
  dir?: string;
  invert_regex?: boolean;
  project_id?: string;
  repo_name?: string;
  tag_name?: string;
}

export interface GoogleCloudfunctions2FunctionArgsBuildConfigSourceStorageSource {
  bucket?: string;
  object?: string;
}

export interface GoogleCloudfunctions2FunctionArgsBuildConfigSource {
  repo_source?: GoogleCloudfunctions2FunctionArgsBuildConfigSourceRepoSource;
  storage_source?: GoogleCloudfunctions2FunctionArgsBuildConfigSourceStorageSource;
}

export interface GoogleCloudfunctions2FunctionArgsBuildConfig {
  entry_point?: string;
  runtime?: string;
  worker_pool?: string;
  automatic_update_policy?: GoogleCloudfunctions2FunctionArgsBuildConfigAutomaticUpdatePolicy;
  on_deploy_update_policy?: GoogleCloudfunctions2FunctionArgsBuildConfigOnDeployUpdatePolicy;
  source?: GoogleCloudfunctions2FunctionArgsBuildConfigSource;
}

export interface GoogleCloudfunctions2FunctionArgsEventTriggerEventFilters {
  attribute: string;
  operator?: string;
  value: string;
}

export interface GoogleCloudfunctions2FunctionArgsEventTrigger {
  event_type?: string;
  retry_policy?: string;
  event_filters?: GoogleCloudfunctions2FunctionArgsEventTriggerEventFilters[];
}

export interface GoogleCloudfunctions2FunctionArgsServiceConfigSecretEnvironmentVariables {
  key: string;
  project_id: string;
  secret: string;
  version: string;
}

export interface GoogleCloudfunctions2FunctionArgsServiceConfigSecretVolumesVersions {
  path: string;
  version: string;
}

export interface GoogleCloudfunctions2FunctionArgsServiceConfigSecretVolumes {
  mount_path: string;
  project_id: string;
  secret: string;
  versions?: GoogleCloudfunctions2FunctionArgsServiceConfigSecretVolumesVersions[];
}

export interface GoogleCloudfunctions2FunctionArgsServiceConfig {
  all_traffic_on_latest_revision?: boolean;
  ingress_settings?: string;
  min_instance_count?: number;
  vpc_connector?: string;
  vpc_connector_egress_settings?: string;
  secret_environment_variables?: GoogleCloudfunctions2FunctionArgsServiceConfigSecretEnvironmentVariables[];
  secret_volumes?: GoogleCloudfunctions2FunctionArgsServiceConfigSecretVolumes[];
}

export interface GoogleCloudfunctions2FunctionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudfunctions2FunctionArgs {
  description?: string;
  kms_key_name?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  build_config?: GoogleCloudfunctions2FunctionArgsBuildConfig;
  event_trigger?: GoogleCloudfunctions2FunctionArgsEventTrigger;
  service_config?: GoogleCloudfunctions2FunctionArgsServiceConfig;
  timeouts?: GoogleCloudfunctions2FunctionArgsTimeouts;
}

export class google_cloudfunctions2_function extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudfunctions2FunctionArgs) {
    const meta = {build_config:{isBlock:true,automatic_update_policy:{isBlock:true},on_deploy_update_policy:{isBlock:true},source:{isBlock:true,repo_source:{isBlock:true},storage_source:{isBlock:true}}},event_trigger:{isBlock:true,event_filters:{isBlock:true}},service_config:{isBlock:true,secret_environment_variables:{isBlock:true},secret_volumes:{isBlock:true,versions:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloudfunctions2_function", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get environment(): string {
    return `${this.resourceType}.${this.resourceName}.environment`;
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
