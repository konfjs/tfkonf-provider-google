import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleContainerRegistryRepositoryArgs {
  region?: string;
}

export class data_google_container_registry_repository extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleContainerRegistryRepositoryArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_container_registry_repository", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get repository_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_url`;
  }
}
