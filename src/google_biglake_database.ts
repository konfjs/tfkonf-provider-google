import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBiglakeDatabaseArgsHiveOptions {
  location_uri?: string;
  parameters?: { [key: string]: string };
}

export interface GoogleBiglakeDatabaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBiglakeDatabaseArgs {
  catalog: string;
  name: string;
  type: string;
  hive_options: GoogleBiglakeDatabaseArgsHiveOptions;
  timeouts?: GoogleBiglakeDatabaseArgsTimeouts;
}

export class google_biglake_database extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBiglakeDatabaseArgs) {
    const meta = {hive_options:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_biglake_database", resourceName);
  }

  get catalog(): string {
    return `${this.resourceType}.${this.resourceName}.catalog`;
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
