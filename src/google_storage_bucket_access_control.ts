import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageBucketAccessControlArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleStorageBucketAccessControlArgs {
  bucket: string;
  entity: string;
  role?: string;
  timeouts?: GoogleStorageBucketAccessControlArgsTimeouts;
}

export class google_storage_bucket_access_control extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageBucketAccessControlArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_bucket_access_control", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get entity(): string {
    return `${this.resourceType}.${this.resourceName}.entity`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
