import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleContainerAttachedInstallManifestArgs {
  cluster_id: string;
  location: string;
  platform_version: string;
  project: string;
}

export class data_google_container_attached_install_manifest extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleContainerAttachedInstallManifestArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_container_attached_install_manifest", resourceName);
  }

  get cluster_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get manifest(): string {
    return `data.${this.resourceType}.${this.resourceName}.manifest`;
  }

  get platform_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.platform_version`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
