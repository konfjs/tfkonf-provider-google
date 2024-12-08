import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleContainerRegistryImageArgs {
  digest?: string;
  name: string;
  region?: string;
  tag?: string;
}

export class data_google_container_registry_image extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleContainerRegistryImageArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_container_registry_image", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_url`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
