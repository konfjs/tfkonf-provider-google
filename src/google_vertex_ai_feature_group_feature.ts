import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiFeatureGroupFeatureArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiFeatureGroupFeatureArgs {
  description?: string;
  feature_group: string;
  labels?: { [key: string]: string };
  name: string;
  region: string;
  timeouts?: GoogleVertexAiFeatureGroupFeatureArgsTimeouts;
}

export class google_vertex_ai_feature_group_feature extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVertexAiFeatureGroupFeatureArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_feature_group_feature", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get feature_group(): string {
    return `${this.resourceType}.${this.resourceName}.feature_group`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get version_column_name(): string {
    return `${this.resourceType}.${this.resourceName}.version_column_name`;
  }
}
