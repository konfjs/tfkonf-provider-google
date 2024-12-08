import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryRoutineArgsArguments {
  argument_kind?: string;
  data_type?: string;
  mode?: string;
  name?: string;
}

export interface GoogleBigqueryRoutineArgsRemoteFunctionOptions {
  connection?: string;
  endpoint?: string;
  max_batching_rows?: string;
}

export interface GoogleBigqueryRoutineArgsSparkOptions {
  connection?: string;
  container_image?: string;
  main_class?: string;
  main_file_uri?: string;
  runtime_version?: string;
}

export interface GoogleBigqueryRoutineArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryRoutineArgs {
  data_governance_type?: string;
  dataset_id: string;
  definition_body: string;
  description?: string;
  determinism_level?: string;
  imported_libraries?: string[];
  language?: string;
  return_table_type?: string;
  return_type?: string;
  routine_id: string;
  routine_type: string;
  arguments?: GoogleBigqueryRoutineArgsArguments[];
  remote_function_options?: GoogleBigqueryRoutineArgsRemoteFunctionOptions;
  spark_options?: GoogleBigqueryRoutineArgsSparkOptions;
  timeouts?: GoogleBigqueryRoutineArgsTimeouts;
}

export class google_bigquery_routine extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryRoutineArgs) {
    const meta = {arguments:{isBlock:true},remote_function_options:{isBlock:true},spark_options:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_routine", resourceName);
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get dataset_id(): string {
    return `${this.resourceType}.${this.resourceName}.dataset_id`;
  }

  get definition_body(): string {
    return `${this.resourceType}.${this.resourceName}.definition_body`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get routine_id(): string {
    return `${this.resourceType}.${this.resourceName}.routine_id`;
  }

  get routine_type(): string {
    return `${this.resourceType}.${this.resourceName}.routine_type`;
  }
}
