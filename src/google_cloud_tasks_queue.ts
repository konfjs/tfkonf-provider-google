import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudTasksQueueArgsAppEngineRoutingOverride {
  instance?: string;
  service?: string;
  version?: string;
}

export interface GoogleCloudTasksQueueArgsHttpTargetHeaderOverridesHeader {
  key: string;
  value: string;
}

export interface GoogleCloudTasksQueueArgsHttpTargetHeaderOverrides {
  header: GoogleCloudTasksQueueArgsHttpTargetHeaderOverridesHeader;
}

export interface GoogleCloudTasksQueueArgsHttpTargetOauthToken {
  service_account_email: string;
}

export interface GoogleCloudTasksQueueArgsHttpTargetOidcToken {
  service_account_email: string;
}

export interface GoogleCloudTasksQueueArgsHttpTargetUriOverridePathOverride {
}

export interface GoogleCloudTasksQueueArgsHttpTargetUriOverrideQueryOverride {
}

export interface GoogleCloudTasksQueueArgsHttpTargetUriOverride {
  host?: string;
  port?: string;
  path_override?: GoogleCloudTasksQueueArgsHttpTargetUriOverridePathOverride;
  query_override?: GoogleCloudTasksQueueArgsHttpTargetUriOverrideQueryOverride;
}

export interface GoogleCloudTasksQueueArgsHttpTarget {
  header_overrides?: GoogleCloudTasksQueueArgsHttpTargetHeaderOverrides[];
  oauth_token?: GoogleCloudTasksQueueArgsHttpTargetOauthToken;
  oidc_token?: GoogleCloudTasksQueueArgsHttpTargetOidcToken;
  uri_override?: GoogleCloudTasksQueueArgsHttpTargetUriOverride;
}

export interface GoogleCloudTasksQueueArgsRateLimits {
}

export interface GoogleCloudTasksQueueArgsRetryConfig {
}

export interface GoogleCloudTasksQueueArgsStackdriverLoggingConfig {
  sampling_ratio: number;
}

export interface GoogleCloudTasksQueueArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudTasksQueueArgs {
  location: string;
  name?: string;
  app_engine_routing_override?: GoogleCloudTasksQueueArgsAppEngineRoutingOverride;
  http_target?: GoogleCloudTasksQueueArgsHttpTarget;
  rate_limits?: GoogleCloudTasksQueueArgsRateLimits;
  retry_config?: GoogleCloudTasksQueueArgsRetryConfig;
  stackdriver_logging_config?: GoogleCloudTasksQueueArgsStackdriverLoggingConfig;
  timeouts?: GoogleCloudTasksQueueArgsTimeouts;
}

export class google_cloud_tasks_queue extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudTasksQueueArgs) {
    const meta = {app_engine_routing_override:{isBlock:true},http_target:{isBlock:true,header_overrides:{isBlock:true,header:{isBlock:true}},oauth_token:{isBlock:true},oidc_token:{isBlock:true},uri_override:{isBlock:true,path_override:{isBlock:true},query_override:{isBlock:true}}},rate_limits:{isBlock:true},retry_config:{isBlock:true},stackdriver_logging_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_tasks_queue", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
