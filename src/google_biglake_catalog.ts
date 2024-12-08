import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBiglakeCatalogArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleBiglakeCatalogArgs {
  location: string;
  name: string;
  timeouts?: GoogleBiglakeCatalogArgsTimeouts;
}

export class google_biglake_catalog extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBiglakeCatalogArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_biglake_catalog", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get delete_time(): string {
    return `${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get expire_time(): string {
    return `${this.resourceType}.${this.resourceName}.expire_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
