import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageDefaultObjectAclArgs {
  bucket: string;
}

export class google_storage_default_object_acl extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageDefaultObjectAclArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_storage_default_object_acl", resourceName);
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
