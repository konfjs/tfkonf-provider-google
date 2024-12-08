import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleStorageBucketsArgs {
  prefix?: string;
  project?: string;
}

export class data_google_storage_buckets extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleStorageBucketsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_storage_buckets", resourceName);
  }

  get buckets(): string {
    return `data.${this.resourceType}.${this.resourceName}.buckets`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
