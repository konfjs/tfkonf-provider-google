import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocGdcSparkApplicationArgsPysparkApplicationConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_python_file_uri: string;
  python_file_uris?: string[];
}

export interface GoogleDataprocGdcSparkApplicationArgsSparkApplicationConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
}

export interface GoogleDataprocGdcSparkApplicationArgsSparkRApplicationConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  main_r_file_uri: string;
}

export interface GoogleDataprocGdcSparkApplicationArgsSparkSqlApplicationConfigQueryList {
  queries: string[];
}

export interface GoogleDataprocGdcSparkApplicationArgsSparkSqlApplicationConfig {
  jar_file_uris?: string[];
  query_file_uri?: string;
  script_variables?: { [key: string]: string };
  query_list?: GoogleDataprocGdcSparkApplicationArgsSparkSqlApplicationConfigQueryList;
}

export interface GoogleDataprocGdcSparkApplicationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataprocGdcSparkApplicationArgs {
  annotations?: { [key: string]: string };
  application_environment?: string;
  dependency_images?: string[];
  display_name?: string;
  labels?: { [key: string]: string };
  location: string;
  namespace?: string;
  properties?: { [key: string]: string };
  serviceinstance: string;
  spark_application_id: string;
  version?: string;
  pyspark_application_config?: GoogleDataprocGdcSparkApplicationArgsPysparkApplicationConfig;
  spark_application_config?: GoogleDataprocGdcSparkApplicationArgsSparkApplicationConfig;
  spark_r_application_config?: GoogleDataprocGdcSparkApplicationArgsSparkRApplicationConfig;
  spark_sql_application_config?: GoogleDataprocGdcSparkApplicationArgsSparkSqlApplicationConfig;
  timeouts?: GoogleDataprocGdcSparkApplicationArgsTimeouts;
}

export class google_dataproc_gdc_spark_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataprocGdcSparkApplicationArgs) {
    const meta = {pyspark_application_config:{isBlock:true},spark_application_config:{isBlock:true},spark_r_application_config:{isBlock:true},spark_sql_application_config:{isBlock:true,query_list:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_gdc_spark_application", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
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

  get monitoring_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.monitoring_endpoint`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get output_uri(): string {
    return `${this.resourceType}.${this.resourceName}.output_uri`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get serviceinstance(): string {
    return `${this.resourceType}.${this.resourceName}.serviceinstance`;
  }

  get spark_application_id(): string {
    return `${this.resourceType}.${this.resourceName}.spark_application_id`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_message(): string {
    return `${this.resourceType}.${this.resourceName}.state_message`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
