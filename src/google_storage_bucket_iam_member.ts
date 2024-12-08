import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageBucketIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleStorageBucketIamMemberArgs {
  bucket: string;
  member: string;
  role: string;
  condition?: GoogleStorageBucketIamMemberArgsCondition;
}

export class google_storage_bucket_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageBucketIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_bucket_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
