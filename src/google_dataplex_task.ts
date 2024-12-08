import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexTaskArgsExecutionSpec {
  args?: { [key: string]: string };
  kms_key?: string;
  max_job_execution_lifetime?: string;
  project?: string;
  service_account: string;
}

export interface GoogleDataplexTaskArgsNotebookInfrastructureSpecBatch {
  executors_count?: number;
  max_executors_count?: number;
}

export interface GoogleDataplexTaskArgsNotebookInfrastructureSpecContainerImage {
  image?: string;
  java_jars?: string[];
  properties?: { [key: string]: string };
  python_packages?: string[];
}

export interface GoogleDataplexTaskArgsNotebookInfrastructureSpecVpcNetwork {
  network?: string;
  network_tags?: string[];
  sub_network?: string;
}

export interface GoogleDataplexTaskArgsNotebookInfrastructureSpec {
  batch?: GoogleDataplexTaskArgsNotebookInfrastructureSpecBatch;
  container_image?: GoogleDataplexTaskArgsNotebookInfrastructureSpecContainerImage;
  vpc_network?: GoogleDataplexTaskArgsNotebookInfrastructureSpecVpcNetwork;
}

export interface GoogleDataplexTaskArgsNotebook {
  archive_uris?: string[];
  file_uris?: string[];
  notebook: string;
  infrastructure_spec?: GoogleDataplexTaskArgsNotebookInfrastructureSpec;
}

export interface GoogleDataplexTaskArgsSparkInfrastructureSpecBatch {
  executors_count?: number;
  max_executors_count?: number;
}

export interface GoogleDataplexTaskArgsSparkInfrastructureSpecContainerImage {
  image?: string;
  java_jars?: string[];
  properties?: { [key: string]: string };
  python_packages?: string[];
}

export interface GoogleDataplexTaskArgsSparkInfrastructureSpecVpcNetwork {
  network?: string;
  network_tags?: string[];
  sub_network?: string;
}

export interface GoogleDataplexTaskArgsSparkInfrastructureSpec {
  batch?: GoogleDataplexTaskArgsSparkInfrastructureSpecBatch;
  container_image?: GoogleDataplexTaskArgsSparkInfrastructureSpecContainerImage;
  vpc_network?: GoogleDataplexTaskArgsSparkInfrastructureSpecVpcNetwork;
}

export interface GoogleDataplexTaskArgsSpark {
  archive_uris?: string[];
  file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  python_script_file?: string;
  sql_script?: string;
  sql_script_file?: string;
  infrastructure_spec?: GoogleDataplexTaskArgsSparkInfrastructureSpec;
}

export interface GoogleDataplexTaskArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataplexTaskArgsTriggerSpec {
  disabled?: boolean;
  max_retries?: number;
  schedule?: string;
  start_time?: string;
  type: string;
}

export interface GoogleDataplexTaskArgs {
  description?: string;
  display_name?: string;
  labels?: { [key: string]: string };
  lake?: string;
  location?: string;
  task_id?: string;
  execution_spec: GoogleDataplexTaskArgsExecutionSpec;
  notebook?: GoogleDataplexTaskArgsNotebook;
  spark?: GoogleDataplexTaskArgsSpark;
  timeouts?: GoogleDataplexTaskArgsTimeouts;
  trigger_spec: GoogleDataplexTaskArgsTriggerSpec;
}

export class google_dataplex_task extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataplexTaskArgs) {
    const meta = {execution_spec:{isBlock:true},notebook:{isBlock:true,infrastructure_spec:{isBlock:true,batch:{isBlock:true},container_image:{isBlock:true},vpc_network:{isBlock:true}}},spark:{isBlock:true,infrastructure_spec:{isBlock:true,batch:{isBlock:true},container_image:{isBlock:true},vpc_network:{isBlock:true}}},timeouts:{isBlock:true},trigger_spec:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_task", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get execution_status(): string {
    return `${this.resourceType}.${this.resourceName}.execution_status`;
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
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
