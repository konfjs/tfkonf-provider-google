import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiFeaturestoreArgsEncryptionSpec {
  kms_key_name: string;
}

export interface GoogleVertexAiFeaturestoreArgsOnlineServingConfigScaling {
  max_node_count: number;
  min_node_count: number;
}

export interface GoogleVertexAiFeaturestoreArgsOnlineServingConfig {
  fixed_node_count?: number;
  scaling?: GoogleVertexAiFeaturestoreArgsOnlineServingConfigScaling;
}

export interface GoogleVertexAiFeaturestoreArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiFeaturestoreArgs {
  force_destroy?: boolean;
  labels?: { [key: string]: string };
  name?: string;
  encryption_spec?: GoogleVertexAiFeaturestoreArgsEncryptionSpec;
  online_serving_config?: GoogleVertexAiFeaturestoreArgsOnlineServingConfig;
  timeouts?: GoogleVertexAiFeaturestoreArgsTimeouts;
}

export class google_vertex_ai_featurestore extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVertexAiFeaturestoreArgs) {
    const meta = {encryption_spec:{isBlock:true},online_serving_config:{isBlock:true,scaling:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_featurestore", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
