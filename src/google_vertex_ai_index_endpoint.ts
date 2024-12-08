import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiIndexEndpointArgsPrivateServiceConnectConfig {
  enable_private_service_connect: boolean;
  project_allowlist?: string[];
}

export interface GoogleVertexAiIndexEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiIndexEndpointArgs {
  description?: string;
  display_name: string;
  labels?: { [key: string]: string };
  network?: string;
  public_endpoint_enabled?: boolean;
  region?: string;
  private_service_connect_config?: GoogleVertexAiIndexEndpointArgsPrivateServiceConnectConfig;
  timeouts?: GoogleVertexAiIndexEndpointArgsTimeouts;
}

export class google_vertex_ai_index_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleVertexAiIndexEndpointArgs) {
    const meta = {private_service_connect_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_index_endpoint", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get public_endpoint_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.public_endpoint_domain_name`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
