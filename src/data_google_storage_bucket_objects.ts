import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleStorageBucketObjectsArgs {
  bucket: string;
  match_glob?: string;
  prefix?: string;
}

export class data_google_storage_bucket_objects extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleStorageBucketObjectsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_storage_bucket_objects", resourceName);
  }

  get bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket`;
  }

  get bucket_objects(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket_objects`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
