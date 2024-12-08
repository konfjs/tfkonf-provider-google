import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocJobArgsHadoopConfigLoggingConfig {
  driver_log_levels: { [key: string]: string };
}

export interface GoogleDataprocJobArgsHadoopConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  properties?: { [key: string]: string };
  logging_config?: GoogleDataprocJobArgsHadoopConfigLoggingConfig;
}

export interface GoogleDataprocJobArgsHiveConfig {
  continue_on_failure?: boolean;
  jar_file_uris?: string[];
  properties?: { [key: string]: string };
  query_file_uri?: string;
  query_list?: string[];
  script_variables?: { [key: string]: string };
}

export interface GoogleDataprocJobArgsPigConfigLoggingConfig {
  driver_log_levels: { [key: string]: string };
}

export interface GoogleDataprocJobArgsPigConfig {
  continue_on_failure?: boolean;
  jar_file_uris?: string[];
  properties?: { [key: string]: string };
  query_file_uri?: string;
  query_list?: string[];
  script_variables?: { [key: string]: string };
  logging_config?: GoogleDataprocJobArgsPigConfigLoggingConfig;
}

export interface GoogleDataprocJobArgsPlacement {
  cluster_name: string;
}

export interface GoogleDataprocJobArgsPrestoConfigLoggingConfig {
  driver_log_levels: { [key: string]: string };
}

export interface GoogleDataprocJobArgsPrestoConfig {
  client_tags?: string[];
  continue_on_failure?: boolean;
  output_format?: string;
  properties?: { [key: string]: string };
  query_file_uri?: string;
  query_list?: string[];
  logging_config?: GoogleDataprocJobArgsPrestoConfigLoggingConfig;
}

export interface GoogleDataprocJobArgsPysparkConfigLoggingConfig {
  driver_log_levels: { [key: string]: string };
}

export interface GoogleDataprocJobArgsPysparkConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_python_file_uri: string;
  properties?: { [key: string]: string };
  python_file_uris?: string[];
  logging_config?: GoogleDataprocJobArgsPysparkConfigLoggingConfig;
}

export interface GoogleDataprocJobArgsReference {
}

export interface GoogleDataprocJobArgsScheduling {
  max_failures_per_hour: number;
  max_failures_total: number;
}

export interface GoogleDataprocJobArgsSparkConfigLoggingConfig {
  driver_log_levels: { [key: string]: string };
}

export interface GoogleDataprocJobArgsSparkConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  properties?: { [key: string]: string };
  logging_config?: GoogleDataprocJobArgsSparkConfigLoggingConfig;
}

export interface GoogleDataprocJobArgsSparksqlConfigLoggingConfig {
  driver_log_levels: { [key: string]: string };
}

export interface GoogleDataprocJobArgsSparksqlConfig {
  jar_file_uris?: string[];
  properties?: { [key: string]: string };
  query_file_uri?: string;
  query_list?: string[];
  script_variables?: { [key: string]: string };
  logging_config?: GoogleDataprocJobArgsSparksqlConfigLoggingConfig;
}

export interface GoogleDataprocJobArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleDataprocJobArgs {
  force_delete?: boolean;
  labels?: { [key: string]: string };
  region?: string;
  hadoop_config?: GoogleDataprocJobArgsHadoopConfig;
  hive_config?: GoogleDataprocJobArgsHiveConfig;
  pig_config?: GoogleDataprocJobArgsPigConfig;
  placement: GoogleDataprocJobArgsPlacement;
  presto_config?: GoogleDataprocJobArgsPrestoConfig;
  pyspark_config?: GoogleDataprocJobArgsPysparkConfig;
  reference?: GoogleDataprocJobArgsReference;
  scheduling?: GoogleDataprocJobArgsScheduling;
  spark_config?: GoogleDataprocJobArgsSparkConfig;
  sparksql_config?: GoogleDataprocJobArgsSparksqlConfig;
  timeouts?: GoogleDataprocJobArgsTimeouts;
}

export class google_dataproc_job extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocJobArgs) {
    const meta = {hadoop_config:{isBlock:true,logging_config:{isBlock:true}},hive_config:{isBlock:true},pig_config:{isBlock:true,logging_config:{isBlock:true}},placement:{isBlock:true},presto_config:{isBlock:true,logging_config:{isBlock:true}},pyspark_config:{isBlock:true,logging_config:{isBlock:true}},reference:{isBlock:true},scheduling:{isBlock:true},spark_config:{isBlock:true,logging_config:{isBlock:true}},sparksql_config:{isBlock:true,logging_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_job", resourceName);
  }

  get driver_controls_files_uri(): string {
    return `${this.resourceType}.${this.resourceName}.driver_controls_files_uri`;
  }

  get driver_output_resource_uri(): string {
    return `${this.resourceType}.${this.resourceName}.driver_output_resource_uri`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
