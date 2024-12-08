import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiDatasetArgsEncryptionSpec {
  kms_key_name?: string;
}

export interface GoogleVertexAiDatasetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiDatasetArgs {
  display_name: string;
  labels?: { [key: string]: string };
  metadata_schema_uri: string;
  encryption_spec?: GoogleVertexAiDatasetArgsEncryptionSpec;
  timeouts?: GoogleVertexAiDatasetArgsTimeouts;
}

export class google_vertex_ai_dataset extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVertexAiDatasetArgs) {
    const meta = {encryption_spec:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_dataset", resourceName);
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

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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
