import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocBatchArgsEnvironmentConfigExecutionConfig {
  kms_key?: string;
  network_tags?: string[];
  network_uri?: string;
  staging_bucket?: string;
  subnetwork_uri?: string;
}

export interface GoogleDataprocBatchArgsEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig {
  dataproc_cluster?: string;
}

export interface GoogleDataprocBatchArgsEnvironmentConfigPeripheralsConfig {
  metastore_service?: string;
  spark_history_server_config?: GoogleDataprocBatchArgsEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig;
}

export interface GoogleDataprocBatchArgsEnvironmentConfig {
  execution_config?: GoogleDataprocBatchArgsEnvironmentConfigExecutionConfig;
  peripherals_config?: GoogleDataprocBatchArgsEnvironmentConfigPeripheralsConfig;
}

export interface GoogleDataprocBatchArgsPysparkBatch {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_python_file_uri?: string;
  python_file_uris?: string[];
}

export interface GoogleDataprocBatchArgsRuntimeConfig {
  container_image?: string;
  properties?: { [key: string]: string };
}

export interface GoogleDataprocBatchArgsSparkBatch {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
}

export interface GoogleDataprocBatchArgsSparkRBatch {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  main_r_file_uri?: string;
}

export interface GoogleDataprocBatchArgsSparkSqlBatch {
  jar_file_uris?: string[];
  query_file_uri?: string;
  query_variables?: { [key: string]: string };
}

export interface GoogleDataprocBatchArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataprocBatchArgs {
  batch_id?: string;
  labels?: { [key: string]: string };
  location?: string;
  environment_config?: GoogleDataprocBatchArgsEnvironmentConfig;
  pyspark_batch?: GoogleDataprocBatchArgsPysparkBatch;
  runtime_config?: GoogleDataprocBatchArgsRuntimeConfig;
  spark_batch?: GoogleDataprocBatchArgsSparkBatch;
  spark_r_batch?: GoogleDataprocBatchArgsSparkRBatch;
  spark_sql_batch?: GoogleDataprocBatchArgsSparkSqlBatch;
  timeouts?: GoogleDataprocBatchArgsTimeouts;
}

export class google_dataproc_batch extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocBatchArgs) {
    const meta = {environment_config:{isBlock:true,execution_config:{isBlock:true},peripherals_config:{isBlock:true,spark_history_server_config:{isBlock:true}}},pyspark_batch:{isBlock:true},runtime_config:{isBlock:true},spark_batch:{isBlock:true},spark_r_batch:{isBlock:true},spark_sql_batch:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_batch", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get creator(): string {
    return `${this.resourceType}.${this.resourceName}.creator`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get operation(): string {
    return `${this.resourceType}.${this.resourceName}.operation`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get runtime_info(): string {
    return `${this.resourceType}.${this.resourceName}.runtime_info`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_history(): string {
    return `${this.resourceType}.${this.resourceName}.state_history`;
  }

  get state_message(): string {
    return `${this.resourceType}.${this.resourceName}.state_message`;
  }

  get state_time(): string {
    return `${this.resourceType}.${this.resourceName}.state_time`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uuid(): string {
    return `${this.resourceType}.${this.resourceName}.uuid`;
  }
}
