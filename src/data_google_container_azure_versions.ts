import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleContainerAzureVersionsArgs {
  location?: string;
  project?: string;
}

export class data_google_container_azure_versions extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleContainerAzureVersionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_container_azure_versions", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get supported_regions(): string {
    return `data.${this.resourceType}.${this.resourceName}.supported_regions`;
  }

  get valid_versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_versions`;
  }
}
