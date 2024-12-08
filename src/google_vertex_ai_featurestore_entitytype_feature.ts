import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiFeaturestoreEntitytypeFeatureArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiFeaturestoreEntitytypeFeatureArgs {
  description?: string;
  entitytype: string;
  labels?: { [key: string]: string };
  name?: string;
  value_type: string;
  timeouts?: GoogleVertexAiFeaturestoreEntitytypeFeatureArgsTimeouts;
}

export class google_vertex_ai_featurestore_entitytype_feature extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVertexAiFeaturestoreEntitytypeFeatureArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_featurestore_entitytype_feature", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get entitytype(): string {
    return `${this.resourceType}.${this.resourceName}.entitytype`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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

  get value_type(): string {
    return `${this.resourceType}.${this.resourceName}.value_type`;
  }
}
