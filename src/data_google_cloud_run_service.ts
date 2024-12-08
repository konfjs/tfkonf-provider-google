import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudRunServiceArgs {
  location: string;
  name: string;
  project?: string;
}

export class data_google_cloud_run_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleCloudRunServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloud_run_service", resourceName);
  }

  get autogenerate_revision_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.autogenerate_revision_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get metadata(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get template(): string {
    return `data.${this.resourceType}.${this.resourceName}.template`;
  }

  get traffic(): string {
    return `data.${this.resourceType}.${this.resourceName}.traffic`;
  }
}
