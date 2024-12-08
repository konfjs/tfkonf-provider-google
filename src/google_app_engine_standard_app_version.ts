import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAppEngineStandardAppVersionArgsAutomaticScalingStandardSchedulerSettings {
  max_instances?: number;
  min_instances?: number;
  target_cpu_utilization?: number;
  target_throughput_utilization?: number;
}

export interface GoogleAppEngineStandardAppVersionArgsAutomaticScaling {
  max_concurrent_requests?: number;
  max_idle_instances?: number;
  max_pending_latency?: string;
  min_idle_instances?: number;
  min_pending_latency?: string;
  standard_scheduler_settings?: GoogleAppEngineStandardAppVersionArgsAutomaticScalingStandardSchedulerSettings;
}

export interface GoogleAppEngineStandardAppVersionArgsBasicScaling {
  idle_timeout?: string;
  max_instances: number;
}

export interface GoogleAppEngineStandardAppVersionArgsDeploymentFiles {
  name: string;
  sha1_sum?: string;
  source_url: string;
}

export interface GoogleAppEngineStandardAppVersionArgsDeploymentZip {
  files_count?: number;
  source_url: string;
}

export interface GoogleAppEngineStandardAppVersionArgsDeployment {
  files?: GoogleAppEngineStandardAppVersionArgsDeploymentFiles[];
  zip?: GoogleAppEngineStandardAppVersionArgsDeploymentZip;
}

export interface GoogleAppEngineStandardAppVersionArgsEntrypoint {
  shell: string;
}

export interface GoogleAppEngineStandardAppVersionArgsHandlersScript {
  script_path: string;
}

export interface GoogleAppEngineStandardAppVersionArgsHandlersStaticFiles {
  application_readable?: boolean;
  expiration?: string;
  http_headers?: { [key: string]: string };
  mime_type?: string;
  path?: string;
  require_matching_file?: boolean;
  upload_path_regex?: string;
}

export interface GoogleAppEngineStandardAppVersionArgsHandlers {
  auth_fail_action?: string;
  login?: string;
  redirect_http_response_code?: string;
  security_level?: string;
  url_regex?: string;
  script?: GoogleAppEngineStandardAppVersionArgsHandlersScript;
  static_files?: GoogleAppEngineStandardAppVersionArgsHandlersStaticFiles;
}

export interface GoogleAppEngineStandardAppVersionArgsLibraries {
  name?: string;
  version?: string;
}

export interface GoogleAppEngineStandardAppVersionArgsManualScaling {
  instances: number;
}

export interface GoogleAppEngineStandardAppVersionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAppEngineStandardAppVersionArgsVpcAccessConnector {
  egress_setting?: string;
  name: string;
}

export interface GoogleAppEngineStandardAppVersionArgs {
  app_engine_apis?: boolean;
  delete_service_on_destroy?: boolean;
  env_variables?: { [key: string]: string };
  inbound_services?: string[];
  noop_on_destroy?: boolean;
  runtime: string;
  runtime_api_version?: string;
  service: string;
  threadsafe?: boolean;
  version_id?: string;
  automatic_scaling?: GoogleAppEngineStandardAppVersionArgsAutomaticScaling;
  basic_scaling?: GoogleAppEngineStandardAppVersionArgsBasicScaling;
  deployment: GoogleAppEngineStandardAppVersionArgsDeployment;
  entrypoint: GoogleAppEngineStandardAppVersionArgsEntrypoint;
  handlers?: GoogleAppEngineStandardAppVersionArgsHandlers[];
  libraries?: GoogleAppEngineStandardAppVersionArgsLibraries[];
  manual_scaling?: GoogleAppEngineStandardAppVersionArgsManualScaling;
  timeouts?: GoogleAppEngineStandardAppVersionArgsTimeouts;
  vpc_access_connector?: GoogleAppEngineStandardAppVersionArgsVpcAccessConnector;
}

export class google_app_engine_standard_app_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAppEngineStandardAppVersionArgs) {
    const meta = {automatic_scaling:{isBlock:true,standard_scheduler_settings:{isBlock:true}},basic_scaling:{isBlock:true},deployment:{isBlock:true,files:{isBlock:true},zip:{isBlock:true}},entrypoint:{isBlock:true},handlers:{isBlock:true,script:{isBlock:true},static_files:{isBlock:true}},libraries:{isBlock:true},manual_scaling:{isBlock:true},timeouts:{isBlock:true},vpc_access_connector:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_app_engine_standard_app_version", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_class(): string {
    return `${this.resourceType}.${this.resourceName}.instance_class`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get runtime(): string {
    return `${this.resourceType}.${this.resourceName}.runtime`;
  }

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }
}
