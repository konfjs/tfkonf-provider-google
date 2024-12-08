import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudbuildTriggerArgs {
  location: string;
  project?: string;
  trigger_id: string;
}

export class data_google_cloudbuild_trigger extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleCloudbuildTriggerArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloudbuild_trigger", resourceName);
  }

  get approval_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.approval_config`;
  }

  get bitbucket_server_trigger_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.bitbucket_server_trigger_config`;
  }

  get build(): string {
    return `data.${this.resourceType}.${this.resourceName}.build`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get disabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.disabled`;
  }

  get filename(): string {
    return `data.${this.resourceType}.${this.resourceName}.filename`;
  }

  get filter(): string {
    return `data.${this.resourceType}.${this.resourceName}.filter`;
  }

  get git_file_source(): string {
    return `data.${this.resourceType}.${this.resourceName}.git_file_source`;
  }

  get github(): string {
    return `data.${this.resourceType}.${this.resourceName}.github`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ignored_files(): string {
    return `data.${this.resourceType}.${this.resourceName}.ignored_files`;
  }

  get include_build_logs(): string {
    return `data.${this.resourceType}.${this.resourceName}.include_build_logs`;
  }

  get included_files(): string {
    return `data.${this.resourceType}.${this.resourceName}.included_files`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get pubsub_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.pubsub_config`;
  }

  get repository_event_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_event_config`;
  }

  get service_account(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_account`;
  }

  get source_to_build(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_to_build`;
  }

  get substitutions(): string {
    return `data.${this.resourceType}.${this.resourceName}.substitutions`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get trigger_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.trigger_id`;
  }

  get trigger_template(): string {
    return `data.${this.resourceType}.${this.resourceName}.trigger_template`;
  }

  get webhook_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.webhook_config`;
  }
}
