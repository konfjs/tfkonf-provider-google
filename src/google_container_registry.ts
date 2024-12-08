import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerRegistryArgs {
  location?: string;
}

export class google_container_registry extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleContainerRegistryArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_container_registry", resourceName);
  }

  get bucket_self_link(): string {
    return `${this.resourceType}.${this.resourceName}.bucket_self_link`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
