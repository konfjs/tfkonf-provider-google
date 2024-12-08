import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocGdcApplicationEnvironmentArgsSparkApplicationEnvironmentConfig {
  default_properties?: { [key: string]: string };
  default_version?: string;
}

export interface GoogleDataprocGdcApplicationEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataprocGdcApplicationEnvironmentArgs {
  annotations?: { [key: string]: string };
  application_environment_id?: string;
  display_name?: string;
  labels?: { [key: string]: string };
  location: string;
  namespace?: string;
  serviceinstance: string;
  spark_application_environment_config?: GoogleDataprocGdcApplicationEnvironmentArgsSparkApplicationEnvironmentConfig;
  timeouts?: GoogleDataprocGdcApplicationEnvironmentArgsTimeouts;
}

export class google_dataproc_gdc_application_environment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataprocGdcApplicationEnvironmentArgs) {
    const meta = {spark_application_environment_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_gdc_application_environment", resourceName);
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get serviceinstance(): string {
    return `${this.resourceType}.${this.resourceName}.serviceinstance`;
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
