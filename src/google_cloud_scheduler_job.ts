import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudSchedulerJobArgsAppEngineHttpTargetAppEngineRouting {
  instance?: string;
  service?: string;
  version?: string;
}

export interface GoogleCloudSchedulerJobArgsAppEngineHttpTarget {
  body?: string;
  headers?: { [key: string]: string };
  http_method?: string;
  relative_uri: string;
  app_engine_routing?: GoogleCloudSchedulerJobArgsAppEngineHttpTargetAppEngineRouting;
}

export interface GoogleCloudSchedulerJobArgsHttpTargetOauthToken {
  scope?: string;
  service_account_email: string;
}

export interface GoogleCloudSchedulerJobArgsHttpTargetOidcToken {
  audience?: string;
  service_account_email: string;
}

export interface GoogleCloudSchedulerJobArgsHttpTarget {
  body?: string;
  headers?: { [key: string]: string };
  http_method?: string;
  uri: string;
  oauth_token?: GoogleCloudSchedulerJobArgsHttpTargetOauthToken;
  oidc_token?: GoogleCloudSchedulerJobArgsHttpTargetOidcToken;
}

export interface GoogleCloudSchedulerJobArgsPubsubTarget {
  attributes?: { [key: string]: string };
  data?: string;
  topic_name: string;
}

export interface GoogleCloudSchedulerJobArgsRetryConfig {
}

export interface GoogleCloudSchedulerJobArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudSchedulerJobArgs {
  attempt_deadline?: string;
  description?: string;
  name: string;
  schedule?: string;
  time_zone?: string;
  app_engine_http_target?: GoogleCloudSchedulerJobArgsAppEngineHttpTarget;
  http_target?: GoogleCloudSchedulerJobArgsHttpTarget;
  pubsub_target?: GoogleCloudSchedulerJobArgsPubsubTarget;
  retry_config?: GoogleCloudSchedulerJobArgsRetryConfig;
  timeouts?: GoogleCloudSchedulerJobArgsTimeouts;
}

export class google_cloud_scheduler_job extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudSchedulerJobArgs) {
    const meta = {app_engine_http_target:{isBlock:true,app_engine_routing:{isBlock:true}},http_target:{isBlock:true,oauth_token:{isBlock:true},oidc_token:{isBlock:true}},pubsub_target:{isBlock:true},retry_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_scheduler_job", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get paused(): string {
    return `${this.resourceType}.${this.resourceName}.paused`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
