import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudfunctionsFunctionArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_cloudfunctions_function extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleCloudfunctionsFunctionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloudfunctions_function", resourceName);
  }

  get available_memory_mb(): string {
    return `data.${this.resourceType}.${this.resourceName}.available_memory_mb`;
  }

  get build_environment_variables(): string {
    return `data.${this.resourceType}.${this.resourceName}.build_environment_variables`;
  }

  get build_service_account(): string {
    return `data.${this.resourceType}.${this.resourceName}.build_service_account`;
  }

  get build_worker_pool(): string {
    return `data.${this.resourceType}.${this.resourceName}.build_worker_pool`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get docker_registry(): string {
    return `data.${this.resourceType}.${this.resourceName}.docker_registry`;
  }

  get docker_repository(): string {
    return `data.${this.resourceType}.${this.resourceName}.docker_repository`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get entry_point(): string {
    return `data.${this.resourceType}.${this.resourceName}.entry_point`;
  }

  get environment_variables(): string {
    return `data.${this.resourceType}.${this.resourceName}.environment_variables`;
  }

  get event_trigger(): string {
    return `data.${this.resourceType}.${this.resourceName}.event_trigger`;
  }

  get https_trigger_security_level(): string {
    return `data.${this.resourceType}.${this.resourceName}.https_trigger_security_level`;
  }

  get https_trigger_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.https_trigger_url`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ingress_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.ingress_settings`;
  }

  get kms_key_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_name`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get max_instances(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_instances`;
  }

  get min_instances(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_instances`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get runtime(): string {
    return `data.${this.resourceType}.${this.resourceName}.runtime`;
  }

  get secret_environment_variables(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_environment_variables`;
  }

  get secret_volumes(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_volumes`;
  }

  get service_account_email(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_account_email`;
  }

  get source_archive_bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_archive_bucket`;
  }

  get source_archive_object(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_archive_object`;
  }

  get source_repository(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_repository`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get timeout(): string {
    return `data.${this.resourceType}.${this.resourceName}.timeout`;
  }

  get trigger_http(): string {
    return `data.${this.resourceType}.${this.resourceName}.trigger_http`;
  }

  get version_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_id`;
  }

  get vpc_connector(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_connector`;
  }

  get vpc_connector_egress_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_connector_egress_settings`;
  }
}
