import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiTensorboardArgsEncryptionSpec {
  kms_key_name: string;
}

export interface GoogleVertexAiTensorboardArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiTensorboardArgs {
  description?: string;
  display_name: string;
  labels?: { [key: string]: string };
  encryption_spec?: GoogleVertexAiTensorboardArgsEncryptionSpec;
  timeouts?: GoogleVertexAiTensorboardArgsTimeouts;
}

export class google_vertex_ai_tensorboard extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleVertexAiTensorboardArgs) {
    const meta = {encryption_spec:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_tensorboard", resourceName);
  }

  get blob_storage_path_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.blob_storage_path_prefix`;
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get run_count(): string {
    return `${this.resourceType}.${this.resourceName}.run_count`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
