import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComposerImageVersionsArgs {
}

export class data_google_composer_image_versions extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComposerImageVersionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_composer_image_versions", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get image_versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.image_versions`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }
}
