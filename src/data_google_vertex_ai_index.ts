import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVertexAiIndexArgs {
  name: string;
  project?: string;
  region: string;
}

export class data_google_vertex_ai_index extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleVertexAiIndexArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vertex_ai_index", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get deployed_indexes(): string {
    return `data.${this.resourceType}.${this.resourceName}.deployed_indexes`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get index_stats(): string {
    return `data.${this.resourceType}.${this.resourceName}.index_stats`;
  }

  get index_update_method(): string {
    return `data.${this.resourceType}.${this.resourceName}.index_update_method`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get metadata(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata`;
  }

  get metadata_schema_uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata_schema_uri`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
