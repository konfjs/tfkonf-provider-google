import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleArtifactRegistryDockerImageArgs {
  image_name: string;
  location: string;
  project?: string;
  repository_id: string;
}

export class data_google_artifact_registry_docker_image extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleArtifactRegistryDockerImageArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_artifact_registry_docker_image", resourceName);
  }

  get build_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.build_time`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_name`;
  }

  get image_size_bytes(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_size_bytes`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get media_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.media_type`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get repository_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_id`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }

  get upload_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.upload_time`;
  }
}
