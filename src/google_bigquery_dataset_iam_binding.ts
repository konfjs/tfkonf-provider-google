import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryDatasetIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigqueryDatasetIamBindingArgs {
  dataset_id: string;
  members: string[];
  role: string;
  condition?: GoogleBigqueryDatasetIamBindingArgsCondition;
}

export class google_bigquery_dataset_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBigqueryDatasetIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigquery_dataset_iam_binding", resourceName);
  }

  get dataset_id(): string {
    return `${this.resourceType}.${this.resourceName}.dataset_id`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
