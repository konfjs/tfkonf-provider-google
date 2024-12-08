import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryDatasetArgsAccessDatasetDataset {
  dataset_id: string;
  project_id: string;
}

export interface GoogleBigqueryDatasetArgsAccessDataset {
  target_types: string[];
  dataset: GoogleBigqueryDatasetArgsAccessDatasetDataset;
}

export interface GoogleBigqueryDatasetArgsAccessRoutine {
  dataset_id: string;
  project_id: string;
  routine_id: string;
}

export interface GoogleBigqueryDatasetArgsAccessView {
  dataset_id: string;
  project_id: string;
  table_id: string;
}

export interface GoogleBigqueryDatasetArgsAccess {
  domain?: string;
  group_by_email?: string;
  iam_member?: string;
  role?: string;
  special_group?: string;
  user_by_email?: string;
  dataset?: GoogleBigqueryDatasetArgsAccessDataset;
  routine?: GoogleBigqueryDatasetArgsAccessRoutine;
  view?: GoogleBigqueryDatasetArgsAccessView;
}

export interface GoogleBigqueryDatasetArgsDefaultEncryptionConfiguration {
  kms_key_name: string;
}

export interface GoogleBigqueryDatasetArgsExternalDatasetReference {
  connection: string;
  external_source: string;
}

export interface GoogleBigqueryDatasetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryDatasetArgs {
  dataset_id: string;
  default_partition_expiration_ms?: number;
  default_table_expiration_ms?: number;
  delete_contents_on_destroy?: boolean;
  description?: string;
  friendly_name?: string;
  labels?: { [key: string]: string };
  location?: string;
  resource_tags?: { [key: string]: string };
  access?: GoogleBigqueryDatasetArgsAccess[];
  default_encryption_configuration?: GoogleBigqueryDatasetArgsDefaultEncryptionConfiguration;
  external_dataset_reference?: GoogleBigqueryDatasetArgsExternalDatasetReference;
  timeouts?: GoogleBigqueryDatasetArgsTimeouts;
}

export class google_bigquery_dataset extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigqueryDatasetArgs) {
    const meta = {access:{isBlock:true,dataset:{isBlock:true,dataset:{isBlock:true}},routine:{isBlock:true},view:{isBlock:true}},default_encryption_configuration:{isBlock:true},external_dataset_reference:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_dataset", resourceName);
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get dataset_id(): string {
    return `${this.resourceType}.${this.resourceName}.dataset_id`;
  }

  get default_collation(): string {
    return `${this.resourceType}.${this.resourceName}.default_collation`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get is_case_insensitive(): string {
    return `${this.resourceType}.${this.resourceName}.is_case_insensitive`;
  }

  get last_modified_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get max_time_travel_hours(): string {
    return `${this.resourceType}.${this.resourceName}.max_time_travel_hours`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get storage_billing_model(): string {
    return `${this.resourceType}.${this.resourceName}.storage_billing_model`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
