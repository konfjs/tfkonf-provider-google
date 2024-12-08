import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryDatasetAccessArgsDatasetDataset {
  dataset_id: string;
  project_id: string;
}

export interface GoogleBigqueryDatasetAccessArgsDataset {
  target_types: string[];
  dataset: GoogleBigqueryDatasetAccessArgsDatasetDataset;
}

export interface GoogleBigqueryDatasetAccessArgsRoutine {
  dataset_id: string;
  project_id: string;
  routine_id: string;
}

export interface GoogleBigqueryDatasetAccessArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleBigqueryDatasetAccessArgsView {
  dataset_id: string;
  project_id: string;
  table_id: string;
}

export interface GoogleBigqueryDatasetAccessArgs {
  dataset_id: string;
  domain?: string;
  group_by_email?: string;
  iam_member?: string;
  role?: string;
  special_group?: string;
  user_by_email?: string;
  dataset?: GoogleBigqueryDatasetAccessArgsDataset;
  routine?: GoogleBigqueryDatasetAccessArgsRoutine;
  timeouts?: GoogleBigqueryDatasetAccessArgsTimeouts;
  view?: GoogleBigqueryDatasetAccessArgsView;
}

export class google_bigquery_dataset_access extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigqueryDatasetAccessArgs) {
    const meta = {dataset:{isBlock:true,dataset:{isBlock:true}},routine:{isBlock:true},timeouts:{isBlock:true},view:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_dataset_access", resourceName);
  }

  get api_updated_member(): string {
    return `${this.resourceType}.${this.resourceName}.api_updated_member`;
  }

  get dataset_id(): string {
    return `${this.resourceType}.${this.resourceName}.dataset_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
