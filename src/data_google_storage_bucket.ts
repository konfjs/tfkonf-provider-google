import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleStorageBucketArgs {
  name: string;
  project?: string;
}

export class data_google_storage_bucket extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleStorageBucketArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_storage_bucket", resourceName);
  }

  get autoclass(): string {
    return `data.${this.resourceType}.${this.resourceName}.autoclass`;
  }

  get cors(): string {
    return `data.${this.resourceType}.${this.resourceName}.cors`;
  }

  get custom_placement_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_placement_config`;
  }

  get default_event_based_hold(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_event_based_hold`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get enable_object_retention(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_object_retention`;
  }

  get encryption(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption`;
  }

  get force_destroy(): string {
    return `data.${this.resourceType}.${this.resourceName}.force_destroy`;
  }

  get hierarchical_namespace(): string {
    return `data.${this.resourceType}.${this.resourceName}.hierarchical_namespace`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get lifecycle_rule(): string {
    return `data.${this.resourceType}.${this.resourceName}.lifecycle_rule`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get logging(): string {
    return `data.${this.resourceType}.${this.resourceName}.logging`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get project_number(): string {
    return `data.${this.resourceType}.${this.resourceName}.project_number`;
  }

  get public_access_prevention(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_access_prevention`;
  }

  get requester_pays(): string {
    return `data.${this.resourceType}.${this.resourceName}.requester_pays`;
  }

  get retention_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.retention_policy`;
  }

  get rpo(): string {
    return `data.${this.resourceType}.${this.resourceName}.rpo`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get soft_delete_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.soft_delete_policy`;
  }

  get storage_class(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_class`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uniform_bucket_level_access(): string {
    return `data.${this.resourceType}.${this.resourceName}.uniform_bucket_level_access`;
  }

  get url(): string {
    return `data.${this.resourceType}.${this.resourceName}.url`;
  }

  get versioning(): string {
    return `data.${this.resourceType}.${this.resourceName}.versioning`;
  }

  get website(): string {
    return `data.${this.resourceType}.${this.resourceName}.website`;
  }
}
