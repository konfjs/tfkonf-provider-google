import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComposerEnvironmentArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_composer_environment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComposerEnvironmentArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_composer_environment", resourceName);
  }

  get config(): string {
    return `data.${this.resourceType}.${this.resourceName}.config`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get storage_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_config`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
