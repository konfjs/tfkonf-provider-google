import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfigBruteForceConfig {
}

export interface GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfigTreeAhConfig {
  leaf_node_embedding_count?: number;
  leaf_nodes_to_search_percent?: number;
}

export interface GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfig {
  brute_force_config?: GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfigBruteForceConfig;
  tree_ah_config?: GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfigTreeAhConfig;
}

export interface GoogleVertexAiIndexArgsMetadataConfig {
  approximate_neighbors_count?: number;
  dimensions: number;
  distance_measure_type?: string;
  feature_norm_type?: string;
  algorithm_config?: GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfig;
}

export interface GoogleVertexAiIndexArgsMetadata {
  contents_delta_uri: string;
  is_complete_overwrite?: boolean;
  config?: GoogleVertexAiIndexArgsMetadataConfig;
}

export interface GoogleVertexAiIndexArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiIndexArgs {
  description?: string;
  display_name: string;
  index_update_method?: string;
  labels?: { [key: string]: string };
  region?: string;
  metadata?: GoogleVertexAiIndexArgsMetadata;
  timeouts?: GoogleVertexAiIndexArgsTimeouts;
}

export class google_vertex_ai_index extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleVertexAiIndexArgs) {
    const meta = {metadata:{isBlock:true,config:{isBlock:true,algorithm_config:{isBlock:true,brute_force_config:{isBlock:true},tree_ah_config:{isBlock:true}}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_index", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get deployed_indexes(): string {
    return `${this.resourceType}.${this.resourceName}.deployed_indexes`;
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

  get index_stats(): string {
    return `${this.resourceType}.${this.resourceName}.index_stats`;
  }

  get metadata_schema_uri(): string {
    return `${this.resourceType}.${this.resourceName}.metadata_schema_uri`;
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

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
