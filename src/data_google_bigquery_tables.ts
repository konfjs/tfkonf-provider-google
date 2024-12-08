import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBigqueryTablesArgs {
  dataset_id: string;
  project?: string;
}

export class data_google_bigquery_tables extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleBigqueryTablesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_bigquery_tables", resourceName);
  }

  get dataset_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.dataset_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tables(): string {
    return `data.${this.resourceType}.${this.resourceName}.tables`;
  }
}
