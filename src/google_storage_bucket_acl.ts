import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageBucketAclArgs {
  bucket: string;
  default_acl?: string;
  predefined_acl?: string;
}

export class google_storage_bucket_acl extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleStorageBucketAclArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_storage_bucket_acl", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role_entity(): string {
    return `${this.resourceType}.${this.resourceName}.role_entity`;
  }
}
