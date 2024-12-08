import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleContainerAttachedVersionsArgs {
  location: string;
  project: string;
}

export class data_google_container_attached_versions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleContainerAttachedVersionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_container_attached_versions", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get valid_versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_versions`;
  }
}
