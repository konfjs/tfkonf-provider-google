import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMonitoringUptimeCheckConfigArgsContentMatchersJsonPathMatcher {
  json_matcher?: string;
  json_path: string;
}

export interface GoogleMonitoringUptimeCheckConfigArgsContentMatchers {
  content: string;
  matcher?: string;
  json_path_matcher?: GoogleMonitoringUptimeCheckConfigArgsContentMatchersJsonPathMatcher;
}

export interface GoogleMonitoringUptimeCheckConfigArgsHttpCheckAcceptedResponseStatusCodes {
  status_class?: string;
  status_value?: number;
}

export interface GoogleMonitoringUptimeCheckConfigArgsHttpCheckAuthInfo {
  password: string;
  username: string;
}

export interface GoogleMonitoringUptimeCheckConfigArgsHttpCheckPingConfig {
  pings_count: number;
}

export interface GoogleMonitoringUptimeCheckConfigArgsHttpCheckServiceAgentAuthentication {
  type?: string;
}

export interface GoogleMonitoringUptimeCheckConfigArgsHttpCheck {
  body?: string;
  content_type?: string;
  custom_content_type?: string;
  mask_headers?: boolean;
  path?: string;
  request_method?: string;
  use_ssl?: boolean;
  validate_ssl?: boolean;
  accepted_response_status_codes?: GoogleMonitoringUptimeCheckConfigArgsHttpCheckAcceptedResponseStatusCodes[];
  auth_info?: GoogleMonitoringUptimeCheckConfigArgsHttpCheckAuthInfo;
  ping_config?: GoogleMonitoringUptimeCheckConfigArgsHttpCheckPingConfig;
  service_agent_authentication?: GoogleMonitoringUptimeCheckConfigArgsHttpCheckServiceAgentAuthentication;
}

export interface GoogleMonitoringUptimeCheckConfigArgsMonitoredResource {
  labels: { [key: string]: string };
  type: string;
}

export interface GoogleMonitoringUptimeCheckConfigArgsResourceGroup {
  group_id?: string;
  resource_type?: string;
}

export interface GoogleMonitoringUptimeCheckConfigArgsSyntheticMonitorCloudFunctionV2 {
  name: string;
}

export interface GoogleMonitoringUptimeCheckConfigArgsSyntheticMonitor {
  cloud_function_v2: GoogleMonitoringUptimeCheckConfigArgsSyntheticMonitorCloudFunctionV2;
}

export interface GoogleMonitoringUptimeCheckConfigArgsTcpCheckPingConfig {
  pings_count: number;
}

export interface GoogleMonitoringUptimeCheckConfigArgsTcpCheck {
  port: number;
  ping_config?: GoogleMonitoringUptimeCheckConfigArgsTcpCheckPingConfig;
}

export interface GoogleMonitoringUptimeCheckConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMonitoringUptimeCheckConfigArgs {
  display_name: string;
  period?: string;
  selected_regions?: string[];
  timeout: string;
  user_labels?: { [key: string]: string };
  content_matchers?: GoogleMonitoringUptimeCheckConfigArgsContentMatchers[];
  http_check?: GoogleMonitoringUptimeCheckConfigArgsHttpCheck;
  monitored_resource?: GoogleMonitoringUptimeCheckConfigArgsMonitoredResource;
  resource_group?: GoogleMonitoringUptimeCheckConfigArgsResourceGroup;
  synthetic_monitor?: GoogleMonitoringUptimeCheckConfigArgsSyntheticMonitor;
  tcp_check?: GoogleMonitoringUptimeCheckConfigArgsTcpCheck;
  timeouts?: GoogleMonitoringUptimeCheckConfigArgsTimeouts;
}

export class google_monitoring_uptime_check_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleMonitoringUptimeCheckConfigArgs) {
    const meta = {content_matchers:{isBlock:true,json_path_matcher:{isBlock:true}},http_check:{isBlock:true,accepted_response_status_codes:{isBlock:true},auth_info:{isBlock:true},ping_config:{isBlock:true},service_agent_authentication:{isBlock:true}},monitored_resource:{isBlock:true},resource_group:{isBlock:true},synthetic_monitor:{isBlock:true,cloud_function_v2:{isBlock:true}},tcp_check:{isBlock:true,ping_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_monitoring_uptime_check_config", resourceName);
  }

  get checker_type(): string {
    return `${this.resourceType}.${this.resourceName}.checker_type`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
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

  get timeout(): string {
    return `${this.resourceType}.${this.resourceName}.timeout`;
  }

  get uptime_check_id(): string {
    return `${this.resourceType}.${this.resourceName}.uptime_check_id`;
  }
}
