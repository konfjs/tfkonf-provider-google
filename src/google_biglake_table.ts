import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBiglakeTableArgsHiveOptionsStorageDescriptor {
  input_format?: string;
  location_uri?: string;
  output_format?: string;
}

export interface GoogleBiglakeTableArgsHiveOptions {
  parameters?: { [key: string]: string };
  table_type?: string;
  storage_descriptor?: GoogleBiglakeTableArgsHiveOptionsStorageDescriptor;
}

export interface GoogleBiglakeTableArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBiglakeTableArgs {
  database?: string;
  name: string;
  type?: string;
  hive_options?: GoogleBiglakeTableArgsHiveOptions;
  timeouts?: GoogleBiglakeTableArgsTimeouts;
}

export class google_biglake_table extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBiglakeTableArgs) {
    const meta = {hive_options:{isBlock:true,storage_descriptor:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_biglake_table", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get delete_time(): string {
    return `${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
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

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
