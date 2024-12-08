import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSqlSourceRepresentationInstanceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleSqlSourceRepresentationInstanceArgs {
  ca_certificate?: string;
  client_certificate?: string;
  client_key?: string;
  database_version: string;
  dump_file_path?: string;
  host: string;
  name: string;
  password?: string;
  port?: number;
  username?: string;
  timeouts?: GoogleSqlSourceRepresentationInstanceArgsTimeouts;
}

export class google_sql_source_representation_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSqlSourceRepresentationInstanceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_sql_source_representation_instance", resourceName);
  }

  get database_version(): string {
    return `${this.resourceType}.${this.resourceName}.database_version`;
  }

  get host(): string {
    return `${this.resourceType}.${this.resourceName}.host`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }
}
