import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiEndpointArgsEncryptionSpec {
  kms_key_name: string;
}

export interface GoogleVertexAiEndpointArgsPredictRequestResponseLoggingConfigBigqueryDestination {
  output_uri?: string;
}

export interface GoogleVertexAiEndpointArgsPredictRequestResponseLoggingConfig {
  enabled?: boolean;
  sampling_rate?: number;
  bigquery_destination?: GoogleVertexAiEndpointArgsPredictRequestResponseLoggingConfigBigqueryDestination;
}

export interface GoogleVertexAiEndpointArgsPrivateServiceConnectConfig {
  enable_private_service_connect: boolean;
  enable_secure_private_service_connect?: boolean;
  project_allowlist?: string[];
}

export interface GoogleVertexAiEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiEndpointArgs {
  dedicated_endpoint_enabled?: boolean;
  description?: string;
  display_name: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  network?: string;
  region?: string;
  encryption_spec?: GoogleVertexAiEndpointArgsEncryptionSpec;
  predict_request_response_logging_config?: GoogleVertexAiEndpointArgsPredictRequestResponseLoggingConfig;
  private_service_connect_config?: GoogleVertexAiEndpointArgsPrivateServiceConnectConfig;
  timeouts?: GoogleVertexAiEndpointArgsTimeouts;
}

export class google_vertex_ai_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleVertexAiEndpointArgs) {
    const meta = {encryption_spec:{isBlock:true},predict_request_response_logging_config:{isBlock:true,bigquery_destination:{isBlock:true}},private_service_connect_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_endpoint", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get dedicated_endpoint_dns(): string {
    return `${this.resourceType}.${this.resourceName}.dedicated_endpoint_dns`;
  }

  get deployed_models(): string {
    return `${this.resourceType}.${this.resourceName}.deployed_models`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
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

  get model_deployment_monitoring_job(): string {
    return `${this.resourceType}.${this.resourceName}.model_deployment_monitoring_job`;
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

  get traffic_split(): string {
    return `${this.resourceType}.${this.resourceName}.traffic_split`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
