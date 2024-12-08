import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudRunV2ServiceArgs {
  location?: string;
  name: string;
  project?: string;
}

export class data_google_cloud_run_v2_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleCloudRunV2ServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloud_run_v2_service", resourceName);
  }

  get annotations(): string {
    return `data.${this.resourceType}.${this.resourceName}.annotations`;
  }

  get binary_authorization(): string {
    return `data.${this.resourceType}.${this.resourceName}.binary_authorization`;
  }

  get client(): string {
    return `data.${this.resourceType}.${this.resourceName}.client`;
  }

  get client_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_version`;
  }

  get conditions(): string {
    return `data.${this.resourceType}.${this.resourceName}.conditions`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get creator(): string {
    return `data.${this.resourceType}.${this.resourceName}.creator`;
  }

  get custom_audiences(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_audiences`;
  }

  get delete_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get deletion_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get effective_annotations(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get expire_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.expire_time`;
  }

  get generation(): string {
    return `data.${this.resourceType}.${this.resourceName}.generation`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get ingress(): string {
    return `data.${this.resourceType}.${this.resourceName}.ingress`;
  }

  get invoker_iam_disabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.invoker_iam_disabled`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get last_modifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modifier`;
  }

  get latest_created_revision(): string {
    return `data.${this.resourceType}.${this.resourceName}.latest_created_revision`;
  }

  get latest_ready_revision(): string {
    return `data.${this.resourceType}.${this.resourceName}.latest_ready_revision`;
  }

  get launch_stage(): string {
    return `data.${this.resourceType}.${this.resourceName}.launch_stage`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get observed_generation(): string {
    return `data.${this.resourceType}.${this.resourceName}.observed_generation`;
  }

  get reconciling(): string {
    return `data.${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get scaling(): string {
    return `data.${this.resourceType}.${this.resourceName}.scaling`;
  }

  get template(): string {
    return `data.${this.resourceType}.${this.resourceName}.template`;
  }

  get terminal_condition(): string {
    return `data.${this.resourceType}.${this.resourceName}.terminal_condition`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get traffic(): string {
    return `data.${this.resourceType}.${this.resourceName}.traffic`;
  }

  get traffic_statuses(): string {
    return `data.${this.resourceType}.${this.resourceName}.traffic_statuses`;
  }

  get uid(): string {
    return `data.${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }

  get uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.uri`;
  }

  get urls(): string {
    return `data.${this.resourceType}.${this.resourceName}.urls`;
  }
}
