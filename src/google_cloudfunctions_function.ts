import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudfunctionsFunctionArgsEventTriggerFailurePolicy {
  retry: boolean;
}

export interface GoogleCloudfunctionsFunctionArgsEventTrigger {
  event_type: string;
  resource: string;
  failure_policy?: GoogleCloudfunctionsFunctionArgsEventTriggerFailurePolicy;
}

export interface GoogleCloudfunctionsFunctionArgsSecretEnvironmentVariables {
  key: string;
  secret: string;
  version: string;
}

export interface GoogleCloudfunctionsFunctionArgsSecretVolumesVersions {
  path: string;
  version: string;
}

export interface GoogleCloudfunctionsFunctionArgsSecretVolumes {
  mount_path: string;
  secret: string;
  versions?: GoogleCloudfunctionsFunctionArgsSecretVolumesVersions[];
}

export interface GoogleCloudfunctionsFunctionArgsSourceRepository {
  url: string;
}

export interface GoogleCloudfunctionsFunctionArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface GoogleCloudfunctionsFunctionArgs {
  available_memory_mb?: number;
  build_environment_variables?: { [key: string]: string };
  build_worker_pool?: string;
  description?: string;
  docker_repository?: string;
  entry_point?: string;
  environment_variables?: { [key: string]: string };
  ingress_settings?: string;
  kms_key_name?: string;
  labels?: { [key: string]: string };
  min_instances?: number;
  name: string;
  runtime: string;
  source_archive_bucket?: string;
  source_archive_object?: string;
  timeout?: number;
  trigger_http?: boolean;
  vpc_connector?: string;
  event_trigger?: GoogleCloudfunctionsFunctionArgsEventTrigger;
  secret_environment_variables?: GoogleCloudfunctionsFunctionArgsSecretEnvironmentVariables[];
  secret_volumes?: GoogleCloudfunctionsFunctionArgsSecretVolumes[];
  source_repository?: GoogleCloudfunctionsFunctionArgsSourceRepository;
  timeouts?: GoogleCloudfunctionsFunctionArgsTimeouts;
}

export class google_cloudfunctions_function extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudfunctionsFunctionArgs) {
    const meta = {event_trigger:{isBlock:true,failure_policy:{isBlock:true}},secret_environment_variables:{isBlock:true},secret_volumes:{isBlock:true,versions:{isBlock:true}},source_repository:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloudfunctions_function", resourceName);
  }

  get build_service_account(): string {
    return `${this.resourceType}.${this.resourceName}.build_service_account`;
  }

  get docker_registry(): string {
    return `${this.resourceType}.${this.resourceName}.docker_registry`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get https_trigger_security_level(): string {
    return `${this.resourceType}.${this.resourceName}.https_trigger_security_level`;
  }

  get https_trigger_url(): string {
    return `${this.resourceType}.${this.resourceName}.https_trigger_url`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get max_instances(): string {
    return `${this.resourceType}.${this.resourceName}.max_instances`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get runtime(): string {
    return `${this.resourceType}.${this.resourceName}.runtime`;
  }

  get service_account_email(): string {
    return `${this.resourceType}.${this.resourceName}.service_account_email`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get version_id(): string {
    return `${this.resourceType}.${this.resourceName}.version_id`;
  }

  get vpc_connector_egress_settings(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_connector_egress_settings`;
  }
}
