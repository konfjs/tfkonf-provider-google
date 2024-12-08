import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocGdcServiceInstanceArgsGdceCluster {
  gdce_cluster: string;
}

export interface GoogleDataprocGdcServiceInstanceArgsSparkServiceInstanceConfig {
}

export interface GoogleDataprocGdcServiceInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataprocGdcServiceInstanceArgs {
  display_name?: string;
  labels?: { [key: string]: string };
  location: string;
  service_account?: string;
  service_instance_id: string;
  gdce_cluster?: GoogleDataprocGdcServiceInstanceArgsGdceCluster;
  spark_service_instance_config?: GoogleDataprocGdcServiceInstanceArgsSparkServiceInstanceConfig;
  timeouts?: GoogleDataprocGdcServiceInstanceArgsTimeouts;
}

export class google_dataproc_gdc_service_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataprocGdcServiceInstanceArgs) {
    const meta = {gdce_cluster:{isBlock:true},spark_service_instance_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_gdc_service_instance", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get effective_service_account(): string {
    return `${this.resourceType}.${this.resourceName}.effective_service_account`;
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

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get requested_state(): string {
    return `${this.resourceType}.${this.resourceName}.requested_state`;
  }

  get service_instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_instance_id`;
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
