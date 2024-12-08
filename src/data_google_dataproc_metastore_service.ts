import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataprocMetastoreServiceArgs {
  location: string;
  project?: string;
  service_id: string;
}

export class data_google_dataproc_metastore_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleDataprocMetastoreServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dataproc_metastore_service", resourceName);
  }

  get artifact_gcs_uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.artifact_gcs_uri`;
  }

  get database_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.database_type`;
  }

  get deletion_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get encryption_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption_config`;
  }

  get endpoint_uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint_uri`;
  }

  get hive_metastore_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.hive_metastore_config`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get maintenance_window(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_window`;
  }

  get metadata_integration(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata_integration`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `data.${this.resourceType}.${this.resourceName}.network`;
  }

  get network_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.network_config`;
  }

  get port(): string {
    return `data.${this.resourceType}.${this.resourceName}.port`;
  }

  get release_channel(): string {
    return `data.${this.resourceType}.${this.resourceName}.release_channel`;
  }

  get scaling_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.scaling_config`;
  }

  get scheduled_backup(): string {
    return `data.${this.resourceType}.${this.resourceName}.scheduled_backup`;
  }

  get service_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_id`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get state_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.state_message`;
  }

  get telemetry_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.telemetry_config`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get tier(): string {
    return `data.${this.resourceType}.${this.resourceName}.tier`;
  }

  get uid(): string {
    return `data.${this.resourceType}.${this.resourceName}.uid`;
  }
}
