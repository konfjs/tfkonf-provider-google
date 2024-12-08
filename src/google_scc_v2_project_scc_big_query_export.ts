import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2ProjectSccBigQueryExportArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccV2ProjectSccBigQueryExportArgs {
  big_query_export_id: string;
  dataset?: string;
  description?: string;
  filter?: string;
  location?: string;
  timeouts?: GoogleSccV2ProjectSccBigQueryExportArgsTimeouts;
}

export class google_scc_v2_project_scc_big_query_export extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSccV2ProjectSccBigQueryExportArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_v2_project_scc_big_query_export", resourceName);
  }

  get big_query_export_id(): string {
    return `${this.resourceType}.${this.resourceName}.big_query_export_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
