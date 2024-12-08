import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryConnectionArgsAwsAccessRole {
  iam_role_id: string;
}

export interface GoogleBigqueryConnectionArgsAws {
  access_role: GoogleBigqueryConnectionArgsAwsAccessRole;
}

export interface GoogleBigqueryConnectionArgsAzure {
  customer_tenant_id: string;
  federated_application_client_id?: string;
}

export interface GoogleBigqueryConnectionArgsCloudResource {
}

export interface GoogleBigqueryConnectionArgsCloudSpanner {
  database: string;
  database_role?: string;
  max_parallelism?: number;
  use_data_boost?: boolean;
  use_parallelism?: boolean;
  use_serverless_analytics?: boolean;
}

export interface GoogleBigqueryConnectionArgsCloudSqlCredential {
  password: string;
  username: string;
}

export interface GoogleBigqueryConnectionArgsCloudSql {
  database: string;
  instance_id: string;
  type: string;
  credential: GoogleBigqueryConnectionArgsCloudSqlCredential;
}

export interface GoogleBigqueryConnectionArgsSparkMetastoreServiceConfig {
  metastore_service?: string;
}

export interface GoogleBigqueryConnectionArgsSparkSparkHistoryServerConfig {
  dataproc_cluster?: string;
}

export interface GoogleBigqueryConnectionArgsSpark {
  metastore_service_config?: GoogleBigqueryConnectionArgsSparkMetastoreServiceConfig;
  spark_history_server_config?: GoogleBigqueryConnectionArgsSparkSparkHistoryServerConfig;
}

export interface GoogleBigqueryConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryConnectionArgs {
  description?: string;
  friendly_name?: string;
  kms_key_name?: string;
  location?: string;
  aws?: GoogleBigqueryConnectionArgsAws;
  azure?: GoogleBigqueryConnectionArgsAzure;
  cloud_resource?: GoogleBigqueryConnectionArgsCloudResource;
  cloud_spanner?: GoogleBigqueryConnectionArgsCloudSpanner;
  cloud_sql?: GoogleBigqueryConnectionArgsCloudSql;
  spark?: GoogleBigqueryConnectionArgsSpark;
  timeouts?: GoogleBigqueryConnectionArgsTimeouts;
}

export class google_bigquery_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigqueryConnectionArgs) {
    const meta = {aws:{isBlock:true,access_role:{isBlock:true}},azure:{isBlock:true},cloud_resource:{isBlock:true},cloud_spanner:{isBlock:true},cloud_sql:{isBlock:true,credential:{isBlock:true}},spark:{isBlock:true,metastore_service_config:{isBlock:true},spark_history_server_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_connection", resourceName);
  }

  get connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.connection_id`;
  }

  get has_credential(): string {
    return `${this.resourceType}.${this.resourceName}.has_credential`;
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
}
