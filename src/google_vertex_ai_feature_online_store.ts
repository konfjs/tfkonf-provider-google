import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiFeatureOnlineStoreArgsBigtableAutoScaling {
  max_node_count: number;
  min_node_count: number;
}

export interface GoogleVertexAiFeatureOnlineStoreArgsBigtable {
  auto_scaling: GoogleVertexAiFeatureOnlineStoreArgsBigtableAutoScaling;
}

export interface GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpointPrivateServiceConnectConfig {
  enable_private_service_connect: boolean;
  project_allowlist?: string[];
}

export interface GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpoint {
  private_service_connect_config?: GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpointPrivateServiceConnectConfig;
}

export interface GoogleVertexAiFeatureOnlineStoreArgsOptimized {
}

export interface GoogleVertexAiFeatureOnlineStoreArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiFeatureOnlineStoreArgs {
  force_destroy?: boolean;
  labels?: { [key: string]: string };
  name: string;
  bigtable?: GoogleVertexAiFeatureOnlineStoreArgsBigtable;
  dedicated_serving_endpoint?: GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpoint;
  optimized?: GoogleVertexAiFeatureOnlineStoreArgsOptimized;
  timeouts?: GoogleVertexAiFeatureOnlineStoreArgsTimeouts;
}

export class google_vertex_ai_feature_online_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVertexAiFeatureOnlineStoreArgs) {
    const meta = {bigtable:{isBlock:true,auto_scaling:{isBlock:true}},dedicated_serving_endpoint:{isBlock:true,private_service_connect_config:{isBlock:true}},optimized:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_feature_online_store", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
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
}
