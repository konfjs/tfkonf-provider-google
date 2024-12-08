import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBigqueryDatasetArgs {
  dataset_id: string;
  project?: string;
}

export class data_google_bigquery_dataset extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleBigqueryDatasetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_bigquery_dataset", resourceName);
  }

  get access(): string {
    return `data.${this.resourceType}.${this.resourceName}.access`;
  }

  get creation_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get dataset_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.dataset_id`;
  }

  get default_collation(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_collation`;
  }

  get default_encryption_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_encryption_configuration`;
  }

  get default_partition_expiration_ms(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_partition_expiration_ms`;
  }

  get default_table_expiration_ms(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_table_expiration_ms`;
  }

  get delete_contents_on_destroy(): string {
    return `data.${this.resourceType}.${this.resourceName}.delete_contents_on_destroy`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get external_dataset_reference(): string {
    return `data.${this.resourceType}.${this.resourceName}.external_dataset_reference`;
  }

  get friendly_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.friendly_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get is_case_insensitive(): string {
    return `data.${this.resourceType}.${this.resourceName}.is_case_insensitive`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get last_modified_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get max_time_travel_hours(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_time_travel_hours`;
  }

  get resource_tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.resource_tags`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get storage_billing_model(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_billing_model`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
