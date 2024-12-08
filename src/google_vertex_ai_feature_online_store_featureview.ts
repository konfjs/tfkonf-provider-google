import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgsBigQuerySource {
  entity_id_columns: string[];
  uri: string;
}

export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgsFeatureRegistrySourceFeatureGroups {
  feature_group_id: string;
  feature_ids: string[];
}

export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgsFeatureRegistrySource {
  project_number?: string;
  feature_groups: GoogleVertexAiFeatureOnlineStoreFeatureviewArgsFeatureRegistrySourceFeatureGroups[];
}

export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgsSyncConfig {
}

export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgs {
  feature_online_store: string;
  labels?: { [key: string]: string };
  name?: string;
  region: string;
  big_query_source?: GoogleVertexAiFeatureOnlineStoreFeatureviewArgsBigQuerySource;
  feature_registry_source?: GoogleVertexAiFeatureOnlineStoreFeatureviewArgsFeatureRegistrySource;
  sync_config?: GoogleVertexAiFeatureOnlineStoreFeatureviewArgsSyncConfig;
  timeouts?: GoogleVertexAiFeatureOnlineStoreFeatureviewArgsTimeouts;
}

export class google_vertex_ai_feature_online_store_featureview extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVertexAiFeatureOnlineStoreFeatureviewArgs) {
    const meta = {big_query_source:{isBlock:true},feature_registry_source:{isBlock:true,feature_groups:{isBlock:true}},sync_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_feature_online_store_featureview", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get feature_online_store(): string {
    return `${this.resourceType}.${this.resourceName}.feature_online_store`;
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
