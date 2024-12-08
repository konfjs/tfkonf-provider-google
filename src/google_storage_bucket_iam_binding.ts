import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageBucketIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleStorageBucketIamBindingArgs {
  bucket: string;
  members: string[];
  role: string;
  condition?: GoogleStorageBucketIamBindingArgsCondition;
}

export class google_storage_bucket_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageBucketIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_bucket_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
