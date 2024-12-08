import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDatastreamConnectionProfileArgsBigqueryProfile {
}

export interface GoogleDatastreamConnectionProfileArgsForwardSshConnectivity {
  hostname: string;
  password?: string;
  port?: number;
  private_key?: string;
  username: string;
}

export interface GoogleDatastreamConnectionProfileArgsGcsProfile {
  bucket: string;
  root_path?: string;
}

export interface GoogleDatastreamConnectionProfileArgsMysqlProfileSslConfig {
  ca_certificate?: string;
  client_certificate?: string;
  client_key?: string;
}

export interface GoogleDatastreamConnectionProfileArgsMysqlProfile {
  hostname: string;
  password: string;
  port?: number;
  username: string;
  ssl_config?: GoogleDatastreamConnectionProfileArgsMysqlProfileSslConfig;
}

export interface GoogleDatastreamConnectionProfileArgsOracleProfile {
  connection_attributes?: { [key: string]: string };
  database_service: string;
  hostname: string;
  password: string;
  port?: number;
  username: string;
}

export interface GoogleDatastreamConnectionProfileArgsPostgresqlProfile {
  database: string;
  hostname: string;
  password: string;
  port?: number;
  username: string;
}

export interface GoogleDatastreamConnectionProfileArgsPrivateConnectivity {
  private_connection: string;
}

export interface GoogleDatastreamConnectionProfileArgsSqlServerProfile {
  database: string;
  hostname: string;
  password: string;
  port?: number;
  username: string;
}

export interface GoogleDatastreamConnectionProfileArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDatastreamConnectionProfileArgs {
  connection_profile_id: string;
  create_without_validation?: boolean;
  display_name: string;
  labels?: { [key: string]: string };
  location: string;
  bigquery_profile?: GoogleDatastreamConnectionProfileArgsBigqueryProfile;
  forward_ssh_connectivity?: GoogleDatastreamConnectionProfileArgsForwardSshConnectivity;
  gcs_profile?: GoogleDatastreamConnectionProfileArgsGcsProfile;
  mysql_profile?: GoogleDatastreamConnectionProfileArgsMysqlProfile;
  oracle_profile?: GoogleDatastreamConnectionProfileArgsOracleProfile;
  postgresql_profile?: GoogleDatastreamConnectionProfileArgsPostgresqlProfile;
  private_connectivity?: GoogleDatastreamConnectionProfileArgsPrivateConnectivity;
  sql_server_profile?: GoogleDatastreamConnectionProfileArgsSqlServerProfile;
  timeouts?: GoogleDatastreamConnectionProfileArgsTimeouts;
}

export class google_datastream_connection_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDatastreamConnectionProfileArgs) {
    const meta = {bigquery_profile:{isBlock:true},forward_ssh_connectivity:{isBlock:true},gcs_profile:{isBlock:true},mysql_profile:{isBlock:true,ssl_config:{isBlock:true}},oracle_profile:{isBlock:true},postgresql_profile:{isBlock:true},private_connectivity:{isBlock:true},sql_server_profile:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_datastream_connection_profile", resourceName);
  }

  get connection_profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.connection_profile_id`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
