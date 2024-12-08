import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleArtifactRegistryLocationsArgs {
}

export class data_google_artifact_registry_locations extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleArtifactRegistryLocationsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_artifact_registry_locations", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get locations(): string {
    return `data.${this.resourceType}.${this.resourceName}.locations`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
