import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageBucketIamPolicyArgs {
  bucket: string;
  policy_data: string;
}

export class google_storage_bucket_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageBucketIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_storage_bucket_iam_policy", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
