import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiFeatureGroupArgsBigQueryBigQuerySource {
  input_uri: string;
}

export interface GoogleVertexAiFeatureGroupArgsBigQuery {
  entity_id_columns?: string[];
  big_query_source: GoogleVertexAiFeatureGroupArgsBigQueryBigQuerySource;
}

export interface GoogleVertexAiFeatureGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiFeatureGroupArgs {
  description?: string;
  labels?: { [key: string]: string };
  name?: string;
  region?: string;
  big_query?: GoogleVertexAiFeatureGroupArgsBigQuery;
  timeouts?: GoogleVertexAiFeatureGroupArgsTimeouts;
}

export class google_vertex_ai_feature_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleVertexAiFeatureGroupArgs) {
    const meta = {big_query:{isBlock:true,big_query_source:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_feature_group", resourceName);
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
