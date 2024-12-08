import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2FolderSccBigQueryExportArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccV2FolderSccBigQueryExportArgs {
  big_query_export_id: string;
  dataset?: string;
  description?: string;
  filter?: string;
  folder: string;
  location?: string;
  timeouts?: GoogleSccV2FolderSccBigQueryExportArgsTimeouts;
}

export class google_scc_v2_folder_scc_big_query_export extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccV2FolderSccBigQueryExportArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_v2_folder_scc_big_query_export", resourceName);
  }

  get big_query_export_id(): string {
    return `${this.resourceType}.${this.resourceName}.big_query_export_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get folder(): string {
    return `${this.resourceType}.${this.resourceName}.folder`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get most_recent_editor(): string {
    return `${this.resourceType}.${this.resourceName}.most_recent_editor`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get principal(): string {
    return `${this.resourceType}.${this.resourceName}.principal`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
