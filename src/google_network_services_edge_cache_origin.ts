import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkServicesEdgeCacheOriginArgsAwsV4Authentication {
  access_key_id: string;
  origin_region: string;
  secret_access_key_version: string;
}

export interface GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionHeaderActionRequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace?: boolean;
}

export interface GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionHeaderAction {
  request_headers_to_add?: GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionHeaderActionRequestHeadersToAdd[];
}

export interface GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionUrlRewrite {
  host_rewrite?: string;
}

export interface GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideAction {
  header_action?: GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionHeaderAction;
  url_rewrite?: GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionUrlRewrite;
}

export interface GoogleNetworkServicesEdgeCacheOriginArgsOriginRedirect {
  redirect_conditions?: string[];
}

export interface GoogleNetworkServicesEdgeCacheOriginArgsTimeout {
  connect_timeout?: string;
  max_attempts_timeout?: string;
  read_timeout?: string;
  response_timeout?: string;
}

export interface GoogleNetworkServicesEdgeCacheOriginArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkServicesEdgeCacheOriginArgs {
  description?: string;
  failover_origin?: string;
  labels?: { [key: string]: string };
  max_attempts?: number;
  name: string;
  origin_address: string;
  aws_v4_authentication?: GoogleNetworkServicesEdgeCacheOriginArgsAwsV4Authentication;
  origin_override_action?: GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideAction;
  origin_redirect?: GoogleNetworkServicesEdgeCacheOriginArgsOriginRedirect;
  timeout?: GoogleNetworkServicesEdgeCacheOriginArgsTimeout;
  timeouts?: GoogleNetworkServicesEdgeCacheOriginArgsTimeouts;
}

export class google_network_services_edge_cache_origin extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetworkServicesEdgeCacheOriginArgs) {
    const meta = {aws_v4_authentication:{isBlock:true},origin_override_action:{isBlock:true,header_action:{isBlock:true,request_headers_to_add:{isBlock:true}},url_rewrite:{isBlock:true}},origin_redirect:{isBlock:true},timeout:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_services_edge_cache_origin", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get origin_address(): string {
    return `${this.resourceType}.${this.resourceName}.origin_address`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get protocol(): string {
    return `${this.resourceType}.${this.resourceName}.protocol`;
  }

  get retry_conditions(): string {
    return `${this.resourceType}.${this.resourceName}.retry_conditions`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
